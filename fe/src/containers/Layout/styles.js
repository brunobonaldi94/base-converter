import styled from 'styled-components';
import helpers from '../../styles/helpers';
export const Main = styled.main`
    width: 100%;
    height: 100%;
    ${({ theme }) => theme.container.main};
    padding:${({ theme }) => theme.container.mainPadding};
    ${helpers.responsive.s`
         padding:${({ theme }) => theme.container.mainPaddingMobile};
    `}
`;
