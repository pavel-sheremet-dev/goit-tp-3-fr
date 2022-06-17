import { useContext } from 'react';
import { PageFormatContext, format } from 'context/pageFormatContext';
import { useTranslation } from 'react-i18next';

import { routes } from 'routes/config';
import { ReactComponent as ListIcon } from 'images/svg/icon-list.svg';
import {
  Container,
  Title,
  SecondTitle,
  ListItem,
  List,
  ListHelp,
  Buttons,
  Link,
  SpanIcon,
  LinkLogin,
} from './Info.styled';

const Info = ({ handleClick }) => {
  const { t } = useTranslation();
  const pageFormat = useContext(PageFormatContext);

  const isResponse = pageFormat === format.response;
  const isMobile = pageFormat === format.mobile;

  return (
    <>
      <Container>
        <Title>Books Reading </Title>
        <SecondTitle>{t('help')}</SecondTitle>
        <ListHelp>
          <List>
            <SpanIcon>
              <ListIcon />
            </SpanIcon>
            <ListItem>{t('goal')}</ListItem>
          </List>
          <List>
            <SpanIcon>
              <ListIcon />
            </SpanIcon>
            <ListItem>{t('timing')}</ListItem>
          </List>
          <List>
            <SpanIcon>
              <ListIcon />
            </SpanIcon>
            <ListItem>{t('success')}</ListItem>
          </List>
        </ListHelp>
        <SecondTitle>{t('youcan')}</SecondTitle>
        <ListHelp>
          <List>
            <SpanIcon>
              <ListIcon />
            </SpanIcon>
            <ListItem>{t('opinion')}</ListItem>
          </List>
          <List>
            <SpanIcon>
              <ListIcon />
            </SpanIcon>
            <ListItem>{t('qualities')}</ListItem>
          </List>
          <List>
            <SpanIcon>
              <ListIcon />
            </SpanIcon>
            <ListItem>{t('interlocutor')}</ListItem>
          </List>
        </ListHelp>
      </Container>
      {isMobile || isResponse ? (
        <Buttons>
          <LinkLogin to={routes.login.path}>{t('login')}</LinkLogin>
          {/* <Link to="signup"> */}
          <Link type="button" onClick={() => handleClick(false)}>
            {t('signup')}
          </Link>
        </Buttons>
      ) : null}
    </>
  );
};

export default Info;
