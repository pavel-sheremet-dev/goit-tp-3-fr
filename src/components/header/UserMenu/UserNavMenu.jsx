import { routes } from 'routes/config';
import { ReactComponent as BookIcon } from 'images/svg/icon-book.svg';
import { ReactComponent as HomeIcon } from 'images/svg/icon-home.svg';
import { StyledBox } from 'components/header/Header.styled';
import { NavIcon, StyledSpanBorder } from './UserMenu.styled';

const { training, library } = routes;

export default function UserNavMenu() {
  return (
    <StyledBox>
      <NavIcon style={{ marginRight: '13px' }} to={training.path}>
        <BookIcon />
      </NavIcon>
      <NavIcon to={library.path}>
        <HomeIcon />
      </NavIcon>
      <StyledSpanBorder></StyledSpanBorder>
    </StyledBox>
  );
}
