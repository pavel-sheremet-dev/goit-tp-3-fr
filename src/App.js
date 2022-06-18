import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';
import { GlobalStyle } from 'styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { themes } from 'styles';
import { ToastContainer } from 'react-toastify';
import Header from 'components/header/Header';
import Layout from 'components/common/layout/Layout';
import MainComponent from 'components/main/MainComponent';
import { Loader } from 'components/common/Loader/Loader';
import { ThemeContext, themesValue } from 'context/themeContext';

const isDark = matchMedia('(prefers-color-scheme: dark)').matches;
const defaultTheme = isDark ? themesValue.dark : themesValue.light;

const App = () => {
  const dispatch = useDispatch();
  const firstLoading = useRef(true);
  const [themeSelect, setThemeSelect] = useState(
    localStorage.getItem('app-theme') || defaultTheme,
  );
  useEffect(() => {
    setThemeSelect(themeSelect);
    localStorage.setItem('app-theme', themeSelect);
  }, [themeSelect]);

  const toggleTheme = () => {
    themeSelect === themesValue.light
      ? setThemeSelect(themesValue.dark)
      : setThemeSelect(themesValue.light);
  };

  useEffect(() => {
    if (firstLoading.current) {
      firstLoading.current = false;
      return;
    }
  }, []);

  const isLoadingUser = useSelector(authSelectors.getLoadingUser);

  useEffect(() => {
    dispatch(authOperations.getUser());
  }, [dispatch]);

  return (
    <>
      <ThemeContext.Provider value={{ themeSelect, toggleTheme }}>
        <ThemeProvider theme={themes[themeSelect]}>
          <Layout>
            <GlobalStyle />
            {isLoadingUser || firstLoading.current ? (
              <Loader />
            ) : (
              <>
                <Header />
                <MainComponent />
              </>
            )}
            <ToastContainer position="top-center" autoClose={4000} />
            <div className="body-frame"></div>
          </Layout>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
};

export default App;
