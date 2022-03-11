import styled, { css } from 'styled-components';

export const ButtonStyled = styled.button`
  background: ${({ theme }) => theme.defaultColors.primary.gradient};
  border: none;
  color: ${({ theme }) => theme.defaultColors.white.normal};
  ${({ $isPrimary }) => !$isPrimary
    && css`
      background: transparent;
      border: 1px solid ${({ theme }) => theme.defaultColors.primary.dark};
      color: ${({ theme }) => theme.defaultColors.black.normal};
    `};
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  box-shadow: ${({ theme }) => theme.shadow.small};
  padding: ${({ theme }) => `${theme.spacing.small} ${theme.spacing.medium}`};
  transition: all 0.1s ease;
  &:hover {
    ${({ disabled }) => !disabled
      && css`
        opacity: 0.8;
        transform: translateY(-0.1rem);
      `};
    ${({ theme }) => theme.button.hover}
  }
  &:active {
    ${({ theme, disabled }) => !disabled
      && css`
        opacity: 1;
        transform: translateY(0.05rem);
        color: ${theme.defaultColors.gray['gray-1']};
      `};
  }
  &:disabled {
    background: ${({ theme }) => theme.defaultColors.gray['gray-1']};
    opacity: 0.8;
    cursor: not-allowed;
  }
`;
