import { useContext } from 'react';
import { PageFormatContext, format } from 'context/pageFormatContext';
import { nanoid } from '@reduxjs/toolkit';

import validationWordLength from 'helpers/validation/validationWordLength';
import GetBookRating from '../GetBookRating';

import { ReactComponent as ExampleIcon } from 'images/svg/example-svg.svg';
import {
  BookIcon,
  FlexTitle,
  BookTitle,
  List,
  BookText,
  BooksTextSentence,
  BooksGetContent,
  StarContainer,
  Button,
  LibraryBox,
  PosContainer,
  Title,
  ContentBox,
} from 'components/LibraryBooks/library.styled';

const FinishedBooks = ({ options = [], toggleModal }) => {
  const pageFormat = useContext(PageFormatContext);

  const { mobile, response, tablet, desktop } = format;
  const isResponse = pageFormat === response;
  const isMobile = pageFormat === mobile;
  const isTablet = pageFormat === tablet;
  const isDesktop = pageFormat === desktop;

  const handleClick = () => {
    console.log('click');
  };

  return (
    <>
      {options.length >= 1 ? (
        <PosContainer>
          <Title>Прочитано</Title>
          {isTablet && (
            <List margin="0 0 10px 0">
              <BookText>Назва книги</BookText>
              <BookText margin="0 0 0 125px" fn={FinishedBooks.name}>
                Автор
              </BookText>
              <BookText margin="0 0 0 85px" fn={FinishedBooks.name}>
                Рік
              </BookText>
              <BookText margin="0 0 0 35px" fn={FinishedBooks.name}>
                Стор.
              </BookText>
              <BookText margin="0 0 0 35px" fn={FinishedBooks.name}>
                Рейтинг
              </BookText>
            </List>
          )}
          {isDesktop && (
            <List margin="0 0 10px 0">
              <BookText>Назва книги</BookText>
              <BookText margin="0 0 0 270px" fn={FinishedBooks.name}>
                Автор
              </BookText>
              <BookText margin="0 0 0 225px" fn={FinishedBooks.name}>
                Рік
              </BookText>
              <BookText margin="0 0 0 70px" fn={FinishedBooks.name}>
                Стор.
              </BookText>
              <BookText margin="0 0 0 110px" fn={FinishedBooks.name}>
                Рейтинг книги
              </BookText>
            </List>
          )}
          {options.map(({ name, author, year, pages, rating }) => {
            return (
              <LibraryBox key={nanoid()} id="height-root">
                {(isResponse || isMobile) && (
                  <>
                    <div style={{ display: 'flex' }}>
                      <BookIcon>
                        <ExampleIcon />
                      </BookIcon>
                      <FlexTitle>
                        <BookTitle>{validationWordLength(65, name)}</BookTitle>
                        <List>
                          <BookText length={author.length} string={26}>
                            <BooksTextSentence>Автор:</BooksTextSentence>
                            <BooksGetContent left="75px" width="110px">
                              {validationWordLength(26, author)}
                            </BooksGetContent>
                          </BookText>
                          <BookText>
                            <BooksTextSentence>Рік:</BooksTextSentence>
                            <BooksGetContent left="75px">
                              {year}
                            </BooksGetContent>
                          </BookText>
                          <BookText>
                            <BooksTextSentence>Стор.:</BooksTextSentence>
                            <BooksGetContent left="75px">
                              {pages}
                            </BooksGetContent>
                          </BookText>
                          <BookText>
                            <BooksTextSentence>Рейтинг:</BooksTextSentence>
                            <StarContainer left="75px">
                              <GetBookRating rating={rating} />
                            </StarContainer>
                          </BookText>
                        </List>
                      </FlexTitle>
                    </div>
                    <Button type="button" onClick={toggleModal}>
                      Резюме
                    </Button>
                  </>
                )}
                {isTablet && (
                  <>
                    <div style={{ display: 'flex' }}>
                      <BookIcon>
                        <ExampleIcon />
                      </BookIcon>
                      <FlexTitle length={name.length} string={30}>
                        <BookTitle
                          type={FinishedBooks.name}
                          width="145px"
                          length={name.length}
                          string={30}
                        >
                          {validationWordLength(30, name)}
                        </BookTitle>
                        <List>
                          <BookText>
                            <BooksGetContent
                              size="14px"
                              height="17px"
                              left="10px"
                              width="115px"
                            >
                              {validationWordLength(23, author)}
                            </BooksGetContent>
                          </BookText>
                          <BookText>
                            <BooksGetContent
                              size="14px"
                              height="17px"
                              left="134px"
                            >
                              {year}
                            </BooksGetContent>
                          </BookText>
                          <BookText>
                            <BooksGetContent
                              size="14px"
                              height="17px"
                              left="210px"
                            >
                              {pages}
                            </BooksGetContent>
                          </BookText>
                          <BookText>
                            <StarContainer left="270px">
                              <GetBookRating rating={rating} />
                            </StarContainer>
                          </BookText>
                        </List>
                      </FlexTitle>
                    </div>
                    <Button type="button" onClick={toggleModal}>
                      Резюме
                    </Button>
                  </>
                )}
                {isDesktop && (
                  <>
                    <ContentBox>
                      <BookIcon>
                        <ExampleIcon />
                      </BookIcon>
                      <FlexTitle length={name.length} string={35}>
                        <BookTitle length={name.length} string={35}>
                          {validationWordLength(37, name)}
                        </BookTitle>
                        <List>
                          <BookText>
                            <BooksGetContent
                              size="14px"
                              height="17px"
                              left="360px"
                              width="250px"
                            >
                              {validationWordLength(31, author)}
                            </BooksGetContent>
                          </BookText>
                          <BookText>
                            <BooksGetContent
                              size="14px"
                              height="17px"
                              left="623px"
                            >
                              {year}
                            </BooksGetContent>
                          </BookText>
                          <BookText>
                            <BooksGetContent
                              size="14px"
                              height="17px"
                              left="735px"
                            >
                              {pages}
                            </BooksGetContent>
                          </BookText>
                          <BookText>
                            <StarContainer left="870px">
                              <GetBookRating rating={rating} />
                            </StarContainer>
                          </BookText>
                        </List>
                      </FlexTitle>
                    </ContentBox>
                    <Button type="button" onClick={toggleModal}>
                      Резюме
                    </Button>
                  </>
                )}
              </LibraryBox>
            );
          })}
        </PosContainer>
      ) : null}
    </>
  );
};

export default FinishedBooks;
