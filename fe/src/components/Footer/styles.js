import styled from "styled-components";
import helpers from "../../styles/helpers";
import GitHubCorner from '../GitHubCorner';

export const FooterStyled = styled.footer`
    position: relative;
    width: 100%;
    padding: ${({theme}) => theme.spacing.large};
    background:${({theme}) => theme.defaultColors.white.dark};
   
`;

export const GitHubCornerMobile = styled(GitHubCorner)`
    display:none;
    ${helpers.responsive.s`
        display:block;
        position:absolute;
        bottom:0;
    `}
`;