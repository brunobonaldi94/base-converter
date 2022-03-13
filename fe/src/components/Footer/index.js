import React from 'react'
import {
    FooterStyled,
    GitHubCornerMobile,
} from './styles';
const Footer = () => {
  return (
    <FooterStyled>
        <span>Developed by Bruno Bonaldi</span>
        <GitHubCornerMobile
            projectUrl="https://github.com/brunobonaldi94"
        />
    </FooterStyled>
  )
}

export default Footer