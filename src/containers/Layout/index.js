import React from 'react';
import PropTypes from 'prop-types';
import {
  Main,
} from './styles';

function Layout({ children }) {
  return (
    <Main>{children}</Main>
  );
}

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
