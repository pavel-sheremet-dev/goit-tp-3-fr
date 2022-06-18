import { createContext } from 'react';

const themesValue = {
  light: 'light',
  dark: 'dark',
};

const ThemeContext = createContext({
  theme: themesValue.light,
  toggleTheme: () => {},
});

export { ThemeContext, themesValue };
