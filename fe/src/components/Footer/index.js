import React from 'react'
import {
    FooterStyled,
    GitHubCornerMobile,
} from './styles';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <FooterStyled>
        <span>Developed by Bruno Bonaldi - {currentYear}</span>
        <GitHubCornerMobile
            projectUrl="https://github.com/brunobonaldi94"
        />
    </FooterStyled>
  )
}

export default Footer