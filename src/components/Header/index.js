import React from 'react';
import GitHubCorner from '../GitHubCorner';
import {
  HeaderContainer,
  Nav,
  NavOptions,
  NavContainer,
} from './styles';

function Header() {
  const navigation = [
    { name: 'Source Code', link: 'https://github.com/brunobonaldi94/base-converter' },
    { name: 'Feedback', link: 'mailto:"brunobonaldirs@gmail.com"?subject=Base Converter Feedback"' },
  ];
  const links = navigation.map((nav) => (
    <li key={nav.name}>
      <a href={nav.link} target="_blank" rel="noreferrer">{nav.name}</a>
    </li>
  ));

  return (
    <HeaderContainer>
      <NavContainer>
        <h1>Base Converter</h1>
        <Nav>
          <NavOptions>
            {links}
          </NavOptions>
        </Nav>
      </NavContainer>
      <GitHubCorner
        projectUrl="https://github.com/brunobonaldi94"
      />
    </HeaderContainer>
  );
}

export default Header;
