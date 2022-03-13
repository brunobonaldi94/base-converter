import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {
  Main,
} from './styles';

function Layout({ children }) {
  return (
    <>
      <Header />
        <Main>{children}</Main>
      <Footer />
    </>
  );
}

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
