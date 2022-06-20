import { Button } from './ButtonTheme.styled';
import { ThemeContext } from 'context/themeContext';
import { ReactComponent as ThemeButton } from 'assets/images/svg/icon-theme.svg';

export const ButtonTheme = ({ style }) => {
  return (
    <ThemeContext.Consumer>
      {({ toggleTheme }) => (
        <Button onClick={toggleTheme} style={style}>
          <ThemeButton />
        </Button>
      )}
    </ThemeContext.Consumer>
  );
};
