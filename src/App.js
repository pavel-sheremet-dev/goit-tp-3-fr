import { GlobalStyle } from 'styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { getCssVars } from 'styles/vars';
import Header from 'components/header/Header';
import Main from 'components/main/Main';
import Layout from 'components/layout/Layout';
import Example from 'components/Example';

const App = () => {
  return (
    <div>
      <ThemeProvider theme={getCssVars()}>
        <Layout>
          <GlobalStyle />
          <Header />
          <Main />
          <Example />
        </Layout>
      </ThemeProvider>
    </div>
  );
};

export default App;
