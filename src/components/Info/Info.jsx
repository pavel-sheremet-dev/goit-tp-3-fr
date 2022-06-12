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
  Button,
  TextButton,
  SpanIcon,
} from './Info.styled';
import { ReactComponent as ListIcon } from 'images/svg/icon-list.svg';

const Info = () => {
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
          <Button href="/login">
            <TextButton>Увійти</TextButton>
          </Button>
          <Button href="/">
            <TextButton>Реєстрація</TextButton>
          </Button>
        </Buttons>
      ) : null}
    </>
  );
};

export default Info;
