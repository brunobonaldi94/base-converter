import { createGlobalStyle } from 'styled-components';
import UIHelpers from './helpers';

const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html{
    scroll-behavior: smooth;
}
body{
    font-family: ${({ theme }) => theme.typography.primaryFont.fontFamily};
    width:100%;
    min-height:100vh;
    background-color: ${({ theme }) => theme.background.main};
    color: ${({ theme }) => theme.colors.text};
}
#root{
    width:100%;
    min-height:100vh;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
}
h1{
    font-family: ${({ theme }) => theme.typography.primaryFont.fontFamily};
    font-size: ${({ theme }) => theme.typography.head.h1.fontSize};
    font-weight: ${({ theme }) => theme.typography.head.h1.fontWeight};
    line-height: ${({ theme }) => theme.typography.head.h1.lineHeight};
    ${UIHelpers.responsive.xs`
        font-size: ${({ theme }) => theme.typography.head.h1.fontSizeMobile};
        font-weight: ${({ theme }) => theme.typography.head.h1.fontWeightMobile};
        line-height: ${({ theme }) => theme.typography.head.h1.lineHeightMobile};
    `} 
}
h2{
    font-family: ${({ theme }) => theme.typography.primaryFont.fontFamily};
    font-size: ${({ theme }) => theme.typography.head.h2.fontSize};
    font-weight: ${({ theme }) => theme.typography.head.h2.fontWeight};
    line-height: ${({ theme }) => theme.typography.head.h2.lineHeight};
    ${UIHelpers.responsive.xs`
        font-size: ${({ theme }) => theme.typography.head.h2.fontSizeMobile};
        font-weight: ${({ theme }) => theme.typography.head.h2.fontWeightMobile};
        line-height: ${({ theme }) => theme.typography.head.h2.lineHeightMobile};
    `} 
}
h3{
    font-family: ${({ theme }) => theme.typography.primaryFont.fontFamily};
    font-size: ${({ theme }) => theme.typography.head.h3.fontSize};
    font-weight: ${({ theme }) => theme.typography.head.h3.fontWeight};
    line-height: ${({ theme }) => theme.typography.head.h3.lineHeight};
    ${UIHelpers.responsive.xs`
        font-size: ${({ theme }) => theme.typography.head.h3.fontSizeMobile};
        font-weight: ${({ theme }) => theme.typography.head.h3.fontWeightMobile};
        line-height: ${({ theme }) => theme.typography.head.h3.lineHeightMobile};
    `} 
}
p{
    font-family: ${({ theme }) => theme.typography.secondaryFont.fontFamily};
    font-size: ${({ theme }) => theme.typography.body.b1.fontSize};
    font-weight: ${({ theme }) => theme.typography.body.b1.fontWeight};
    line-height: ${({ theme }) => theme.typography.body.b1.lineHeight};
    ${UIHelpers.responsive.xs`
        font-size: ${({ theme }) => theme.typography.body.b1.fontSizeMobile};
        font-weight: ${({ theme }) => theme.typography.body.b1.fontWeightMobile};
        line-height: ${({ theme }) => theme.typography.body.b1.lineHeightMobile};
    `} 
}
`;

export default GlobalStyle;
