import React from 'react';
import { ThemeProvider } from 'styled-components';
import Layout from './containers/Layout';
import GlobalStyle from './styles/global';
import themes from './styles/themes';
import Calculator from './components/Calculator';

function App() {
  return (
    <ThemeProvider theme={themes.light}>
      <Layout>
        <GlobalStyle />
        <Calculator />
      </Layout>
    </ThemeProvider>

  );
}

export default App;
