import { Button } from './ButtonTheme.styled';
import { ThemeContext } from 'context/themeContext';
import { ReactComponent as ThemeButton } from 'images/svg/icon-theme.svg';

export const ButtonTheme = () => {
  return (
    <ThemeContext.Consumer>
      {({ toggleTheme }) => (
        <Button onClick={toggleTheme}>
          <ThemeButton />
        </Button>
      )}
    </ThemeContext.Consumer>
  );
};
