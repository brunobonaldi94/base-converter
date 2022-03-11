#include "ft_convert_base.h"

napi_value convert_base(napi_env env, napi_callback_info info)
{
    size_t argc;
    napi_value argv[3];
    size_t buffer_size;
    size_t index;
    char **argvs_base;
    napi_value res;

    index = 0;
    argc = 3;
    napi_get_cb_info(env, info, &argc, argv, NULL, NULL);
    argvs_base = malloc(sizeof(char) * argc + 1);
    while (index < argc)
    {
        napi_get_value_string_utf8(env, argv[index], NULL, NAPI_AUTO_LENGTH, &buffer_size);
        argvs_base[index] = (char *)malloc(sizeof(char) * buffer_size + 1);
        napi_get_value_string_utf8(env, argv[index], argvs_base[index], buffer_size + 1, NULL);
        argvs_base[index][buffer_size + 1] = '\0';
        index++;
    }

    char *result = ft_convert_base(argvs_base[0], argvs_base[1], argvs_base[2]);
    argvs_base[index] = NULL;
    napi_create_string_utf8(env, result, NAPI_AUTO_LENGTH, &res);
    return res;
}

napi_value Init(napi_env env, napi_value exports)
{
    napi_value fn_convert_base;

    napi_create_function(env, NULL, NAPI_AUTO_LENGTH, convert_base, NULL, &fn_convert_base);
    napi_set_named_property(env, exports, "calculateBase", fn_convert_base);
    return NULL;
}

NAPI_MODULE(NODE_GYP_MODULE_NAME, Init)
