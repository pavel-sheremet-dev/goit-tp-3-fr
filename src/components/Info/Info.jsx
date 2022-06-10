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
  const isTablet = pageFormat === format.tablet;
  const isDesktop = pageFormat === format.desktop;

  return (
    <>
      {(isMobile || isResponse) && (
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
                <ListItem>
                  Формувати особисту думку, незалежну від інших
                </ListItem>
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
          <Buttons>
            <Button href="/login">
              <TextButton>Увійти</TextButton>
            </Button>
            <Button href="/">
              <TextButton>Реєстрація</TextButton>
            </Button>
          </Buttons>
        </>
      )}

      {(isTablet || isDesktop) && (
        <>
          {' '}
          <Container>
            <Title>Books Reading </Title>
            <SecondTitle>Допоможе вам</SecondTitle>
            <ListHelp>
              <List>
                <ListIcon />
                <ListItem>
                  Швидше сформулювати свою ціль і розпочати читати
                </ListItem>
              </List>
              <List>
                <span style={{ width: '4px', height: '8px' }}>
                  <ListIcon />
                </span>
                <ListItem>
                  Пропорційно розподілити навантаження на кожний день
                </ListItem>
              </List>
              <List>
                <ListIcon />
                <ListItem>Відстежувати особистий успіх</ListItem>
              </List>
            </ListHelp>
            <SecondTitle>Також ви зможете </SecondTitle>
            <ListHelp>
              <List>
                <span>
                  <ListIcon style={{ width: '4px', height: '8px' }} />
                </span>
                <ListItem>
                  Формувати особисту думку незалежну від інших
                </ListItem>
              </List>
              <List>
                <ListIcon />
                <ListItem>
                  Підвищити свої професійні якості, опираючись на нові знання
                </ListItem>
              </List>
              <List>
                <ListIcon />
                <ListItem>Стати цікавим співрозмовником</ListItem>
              </List>
            </ListHelp>
          </Container>
        </>
      )}
    </>
  );
};

export default Info;
