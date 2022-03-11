#include <node_api.h>
#include <stdio.h>

void console(char *text)
{
    printf("%s\n", text);
}

napi_value console_wrapper(napi_env env, napi_callback_info info)
{
    size_t argc = 3;
    napi_value argv[3];
    size_t buffer_size;

    napi_get_cb_info(env, info, &argc, argv, NULL, NULL);
    napi_get_value_string_utf8(env, argv[0], NULL, 0, &buffer_size);
    char buffer[buffer_size];
    napi_get_value_string_utf8(env, argv[0], buffer, buffer_size + 1, NULL);
    console(buffer);
    return NULL;
}

napi_value Init(napi_env env, napi_value exports)
{
    napi_value str, fn;

    napi_create_string_utf8(env, "Hello Bruno!\n", NAPI_AUTO_LENGTH, &str);
    napi_create_function(env, NULL, NAPI_AUTO_LENGTH, console_wrapper, NULL, &fn);
    napi_set_named_property(env, exports, "hello", str);
    napi_set_named_property(env, exports, "console_wrapper", fn);
    console("Hello Bruno!\n");
    return NULL;
}

NAPI_MODULE(NODE_GYP_MODULE_NAME, Init)
