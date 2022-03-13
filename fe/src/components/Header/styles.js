import styled from 'styled-components';
import helpers from '../../styles/helpers';
import GitHubCorner from '../GitHubCorner';

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.defaultColors.white.dark};
  position: relative;
  display: flex;
  align-items: center;
  box-shadow:${({ theme }) => theme.shadow.medium};
`;
export const NavContainer = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  width: 100%;
  h1{
    width: 100%;
    text-align: center;
    margin-top: ${({ theme }) => theme.spacing.medium};
  }
`;
export const Nav = styled.nav`
  ${({ theme }) => theme.container.main};
  padding: ${({ theme }) => theme.spacing.medium} ${({ theme }) => theme.spacing.small};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;


`;

export const NavOptions = styled.ul`
  display:flex;
  list-style:none;
 
  li + li {
    margin-left: ${({ theme }) => theme.spacing.small};
  }
  li{
    border-radius:4px;
    padding:8px;  
  }
  a{
    padding:8px 16px;
    text-decoration: none;
    color:${({ theme }) => theme.defaultColors.black.light};
    cursor: pointer;
    position:relative;  
    white-space: nowrap;
    transition:all .1s ease;
    display:block;
    &:hover{
      color:${({ theme }) => helpers.hexToRgb(theme.defaultColors.black.light, 0.8)};
    }
    &::before{
      content:'';
      height:2px;
      width:0;
      background:${({ theme }) => theme.defaultColors.primary.normal};
      background-size:0;
      position:absolute;
      top:100%;
      left:0;
      transition:all .3s ease;
    }
    
    &:hover::before{
      width:100%;
    }
  }
`;

export const GitHubCornerDesktop = styled(GitHubCorner)`

  ${helpers.responsive.s`
    display:none;
  `};
`