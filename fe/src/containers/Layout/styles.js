import styled from 'styled-components';

export const Main = styled.main`
    width: 100%;
    min-height:100vh;
    ${({ theme }) => theme.container.main};
    padding:${({ theme }) => theme.container.mainPadding};
`;
