import { routes } from 'routes/config';
import { ReactComponent as BookIcon } from 'assets/images/svg/icon-book.svg';
import { ReactComponent as HomeIcon } from 'assets/images/svg/icon-home.svg';
import { StyledBox } from 'components/header/Header.styled';
import { useLocation } from 'react-router-dom';
import { PageFormatContext, format } from 'context/pageFormatContext';
import { useContext } from 'react';
import NavigationLink from './NavigationLink';

const { training, library } = routes;

export default function UserNavMenu() {
  const pageFormat = useContext(PageFormatContext);

  const location = useLocation();

  return (
    <StyledBox>
      {pageFormat !== format.response ? (
        <>
          <NavigationLink to={training.path} IconComponent={BookIcon} />
          <NavigationLink to={library.path} IconComponent={HomeIcon} />
        </>
      ) : (
        <NavigationLink
          to={
            location.pathname === library.absolutePath
              ? training.path
              : library.path
          }
          IconComponent={
            location.pathname === library.absolutePath ? BookIcon : HomeIcon
          }
        />
      )}
    </StyledBox>
  );
}
