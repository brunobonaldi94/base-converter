import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import {
  Main,
} from './styles';

function Layout({ children }) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  );
}

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
