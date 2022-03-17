/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_convert_base.c                                  :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: bbonaldi <bbonaldi@student.42sp.org.br>    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/03/08 22:26:55 by marvin            #+#    #+#             */
/*   Updated: 2022/03/16 21:23:23 by bbonaldi         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include "ft_convert_base.h"

int is_in_base(char c, char *base)
{
	while (*base)
	{
		if (c == *base)
			return (1);
		base++;
	}
	return (0);
}

int get_nbr(char c, char *base)
{
	int i;

	i = 0;
	while (c != *base)
	{
		i++;
		base++;
	}
	return (i);
}

long int ft_atoi_base(char *str, char *base)
{
	int sign;
	char *nbr_cpy;
	long int result;
	int base_len;

	sign = 1;
	nbr_cpy = str;
	result = 0;
	base_len = 0;
	while (base[base_len])
		base_len++;
	while ((*nbr_cpy >= 9 && *nbr_cpy <= 13) || *nbr_cpy == 32)
		nbr_cpy++;
	while (*nbr_cpy == '+' || *nbr_cpy == '-')
	{
		if (*nbr_cpy == '-')
			sign *= -1;
		nbr_cpy++;
	}
	while (is_in_base(*nbr_cpy, base))
	{
		result = (result * base_len) + get_nbr(*nbr_cpy, base);
		nbr_cpy++;
	}
	return (sign * result);
}

int get_number_len(char *base_to, int base_to_len, long int *nbr, int *sign_len)
{
	int num_len;
	long int nbr_cpy;

	num_len = 0;
	nbr_cpy = *nbr;
	if (*nbr < 0)
	{
		*nbr = *nbr * -1;
		*sign_len = 1;
	}
	else
		*sign_len = 0;
	while (nbr_cpy)
	{
		num_len++;
		nbr_cpy /= base_to_len;
	}
	return (num_len);
}

char *ft_convert_base(char *nbr, char *base_from, char *base_to)
{
	long int number;
	int base_to_len;
	int num_to_len;
	char *result;
	int sign_len;

	base_to_len = 0;
	while (base_to[base_to_len])
		base_to_len++;
	number = ft_atoi_base(nbr, base_from);
	num_to_len = get_number_len(base_to, base_to_len, &number, &sign_len);
	result = malloc(sizeof(char) * (num_to_len + sign_len + 1));
	if (sign_len > 0)
		result[0] = '-';
	else
		result[0] = base_to[0];
	result[num_to_len + sign_len] = '\0';
	while (num_to_len)
	{
		result[num_to_len + sign_len - 1] = base_to[number % base_to_len];
		number /= base_to_len;
		num_to_len--;
	}
	return (result);
}
