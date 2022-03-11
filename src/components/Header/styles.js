import styled from 'styled-components';

export const HeaderContainer = styled.header`
`;

export const Nav = styled.nav`
  ${({ theme }) => theme.container.main};
  padding: ${({ theme }) => theme.spacing.medium} ${({ theme }) => theme.spacing.small};
`;
