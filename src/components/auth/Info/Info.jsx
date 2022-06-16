import { useContext } from 'react';
import { PageFormatContext, format } from 'context/pageFormatContext';
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
import { ReactComponent as ListIcon } from 'images/svg/icon-list.svg';
import { routes } from 'routes/config';

const Info = ({ handleClick }) => {
  const pageFormat = useContext(PageFormatContext);

  const isResponse = pageFormat === format.response;
  const isMobile = pageFormat === format.mobile;

  return (
    <>
      <Container>
        <Title>Books Reading </Title>
        <SecondTitle>Допоможе вам</SecondTitle>
        <ListHelp>
          <List>
            <SpanIcon>
              <ListIcon />
            </SpanIcon>
            <ListItem>
              Швидше сформулювати свою ціль і розпочати читати
            </ListItem>
          </List>
          <List>
            <SpanIcon>
              <ListIcon />
            </SpanIcon>
            <ListItem>
              Пропорційно розподілити навантаження на кожний день
            </ListItem>
          </List>
          <List>
            <SpanIcon>
              <ListIcon />
            </SpanIcon>
            <ListItem>Відстежувати особистий успіх</ListItem>
          </List>
        </ListHelp>
        <SecondTitle>Також ви зможете </SecondTitle>
        <ListHelp>
          <List>
            <SpanIcon>
              <ListIcon />
            </SpanIcon>
            <ListItem>Формувати особисту думку, незалежну від інших</ListItem>
          </List>
          <List>
            <SpanIcon>
              <ListIcon />
            </SpanIcon>
            <ListItem>
              Підвищити свої професійні якості, опираючись на нові знання
            </ListItem>
          </List>
          <List>
            <SpanIcon>
              <ListIcon />
            </SpanIcon>
            <ListItem>Стати цікавим співрозмовником</ListItem>
          </List>
        </ListHelp>
      </Container>
      {isMobile || isResponse ? (
        <Buttons>
          <LinkLogin to={routes.login.path}>Увійти</LinkLogin>
          {/* <Link to="signup"> */}
          <Link type="button" onClick={() => handleClick(false)}>
            Реєстрація
          </Link>
        </Buttons>
      ) : null}
    </>
  );
};

export default Info;
