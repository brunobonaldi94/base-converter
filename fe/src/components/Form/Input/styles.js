import styled from 'styled-components';
import helpers from '../../../styles/helpers';

export const InputStyled = styled.input`
    font-size: ${({ theme }) => theme.typography.head.h3.fontSize};
    text-align: center;
    width: 100%;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.defaultColors.white.light};
    outline: none;
    border: 1px solid transparent;
    padding: ${({ theme }) => theme.spacing.small};
    box-shadow: ${({ theme }) => theme.shadow.medium};
    transition: all 0.3s ease;
    ${helpers.responsive.s`
        border-color: ${({ theme }) => helpers.hexToRgb(theme.defaultColors.black.normal,0.3)};
    `};
    &:focus{
      border-color: ${({ theme }) => theme.defaultColors.primary.normal};
    }
`;
