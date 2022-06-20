import React, { useState, useEffect } from 'react';

import { PageFormatContext, format } from 'context/pageFormatContext';
import { themes } from 'styles';
import { ThemeProvider } from 'styled-components';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeContext, themesValue } from 'context/themeContext';
import { PositionContext } from 'context/positionContext';

const { mobile, tablet, desktop } = themes.light.breakPoints;

const isDark = matchMedia('(prefers-color-scheme: dark)').matches;
const defaultTheme = isDark ? themesValue.dark : themesValue.light;

const Layout = ({ children }) => {
  const [pageFormat, setPageFormat] = useState(null);
  const [isRightHand, setIsRightHand] = useState(
    () => JSON.parse(localStorage.getItem('right-hand')) ?? false,
  );
  const [themeSelect, setThemeSelect] = useState(
    localStorage.getItem('app-theme') || defaultTheme,
  );

  useEffect(() => {
    const onHandleResize = () => {
      const viewport = window.innerWidth;

      if (
        viewport < Number.parseInt(mobile) &&
        pageFormat !== format.response
      ) {
        setPageFormat(format.response);
        return;
      }
      if (
        viewport >= Number.parseInt(mobile) &&
        viewport < Number.parseInt(tablet) &&
        pageFormat !== format.mobile
      ) {
        setPageFormat(format.mobile);
        return;
      }
      if (
        viewport >= Number.parseInt(tablet) &&
        viewport < Number.parseInt(desktop) &&
        pageFormat !== format.tablet
      ) {
        setPageFormat(format.tablet);
        return;
      }
      if (
        viewport >= Number.parseInt(desktop) &&
        pageFormat !== format.desktop
      ) {
        setPageFormat(format.desktop);
        return;
      }
    };
    window.addEventListener('resize', onHandleResize);
    onHandleResize();
  }, [pageFormat]);

  useEffect(() => {
    localStorage.setItem('right-hand', isRightHand);
  }, [isRightHand]);

  useEffect(() => {
    setThemeSelect(themeSelect);
    localStorage.setItem('app-theme', themeSelect);
  }, [themeSelect]);

  const toggleHand = value => {
    setIsRightHand(value);
  };

  const toggleTheme = () => {
    themeSelect === themesValue.light
      ? setThemeSelect(themesValue.dark)
      : setThemeSelect(themesValue.light);
  };

  return (
    <PageFormatContext.Provider value={pageFormat}>
      <ThemeContext.Provider value={{ themeSelect, toggleTheme }}>
        <ThemeProvider theme={themes[themeSelect]}>
          <PositionContext.Provider value={{ isRightHand, toggleHand }}>
            <HelmetProvider>{children}</HelmetProvider>
          </PositionContext.Provider>
        </ThemeProvider>
      </ThemeContext.Provider>
    </PageFormatContext.Provider>
  );
};

export default Layout;
