import { useState, useEffect, useContext } from 'react';
import { PageFormatContext, format } from 'context/pageFormatContext';
import { nanoid } from '@reduxjs/toolkit';

import validationWordLength from 'helpers/validation/validationWordLength';
import fetchLibBooksCollections from 'helpers/libraryService';
import { ReactComponent as ExampleIcon } from 'images/svg/example-svg.svg';

import data from 'data/data1.json';

import {
  BookIcon,
  FlexTitle,
  BookTitle,
  List,
  BookText,
  BooksTextSentence,
  BooksGetContent,
  LibraryBox,
  CollectionBox,
  PosContainer,
  Title,
  ContentBox,
  Book,
} from 'components/LibraryBooks/library.styled';

const InActionBooks = ({ type, title }) => {
  const [options, setOptions] = useState([]);
  const pageFormat = useContext(PageFormatContext);

  const { mobile, response, tablet, desktop } = format;
  const isResponse = pageFormat === response;
  const isMobile = pageFormat === mobile;
  const isTablet = pageFormat === tablet;
  const isDesktop = pageFormat === desktop;

  useEffect(() => {
    fetchLibBooksCollections()
      .then(books => {
        if (type === 'ReadingBooks') {
          setOptions(books.reading);
        }
        if (type === 'UnreadBooks') {
          setOptions(books.unread);
        }
      })
      .catch(e => {
        console.log(e.message);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {options.length >= 1 ? (
        <PosContainer>
          <Title>{title}</Title>
          {isTablet && (
            <List margin="0 0 10px 0">
              <BookText>Назва книги</BookText>
              <BookText
                margin="0 0 0 125px"
                more="0 0 0 275px"
                fn={InActionBooks.name}
              >
                Автор
              </BookText>
              <BookText
                margin="0 0 0 85px"
                more="0 0 0 170px"
                fn={InActionBooks.name}
              >
                Рік
              </BookText>
              <BookText
                margin="0 0 0 35px"
                more="0 0 0 40px"
                fn={InActionBooks.name}
              >
                Стор.
              </BookText>
            </List>
          )}
          {isDesktop && (
            <List margin="0 0 10px 0">
              <BookText>Назва книги</BookText>
              <BookText
                margin="0 0 0 270px"
                more="0 0 0 550px"
                fn={InActionBooks.name}
              >
                Автор
              </BookText>
              <BookText
                margin="0 0 0 225px"
                more="0 0 0 345px"
                fn={InActionBooks.name}
              >
                Рік
              </BookText>
              <BookText
                margin="0 0 0 70px"
                more="0 0 0 80px"
                fn={InActionBooks.name}
              >
                Стор.
              </BookText>
            </List>
          )}
          <CollectionBox>
            {options.map(({ name, author, year, pages }) => {
              return (
                <LibraryBox key={nanoid()}>
                  {(isResponse || isMobile) && (
                    <>
                      <div style={{ display: 'flex' }}>
                        <BookIcon>
                          <ExampleIcon />
                        </BookIcon>
                        <FlexTitle>
                          <BookTitle>
                            {validationWordLength(65, name)}
                          </BookTitle>
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
                          </List>
                        </FlexTitle>
                      </div>
                    </>
                  )}
                  {isTablet && (
                    <>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <BookIcon color={InActionBooks.name} height="37px">
                          <Book fill={type} />
                        </BookIcon>
                        <FlexTitle length={name.length} string={30}>
                          <BookTitle
                            type={type}
                            wid="295px"
                            length={name.length}
                            string={30}
                          >
                            {validationWordLength(38, name)}
                          </BookTitle>
                          <List>
                            <BookText>
                              <BooksGetContent
                                size="14px"
                                height="17px"
                                left="11px"
                                width="200px"
                              >
                                {validationWordLength(26, author)}
                              </BooksGetContent>
                            </BookText>
                            <BookText>
                              <BooksGetContent
                                size="14px"
                                height="17px"
                                left="218px"
                              >
                                {year}
                              </BooksGetContent>
                            </BookText>
                            <BookText>
                              <BooksGetContent
                                size="14px"
                                height="17px"
                                left="300px"
                              >
                                {pages}
                              </BooksGetContent>
                            </BookText>
                            <BookText></BookText>
                          </List>
                        </FlexTitle>
                      </div>
                    </>
                  )}
                  {isDesktop && (
                    <>
                      <ContentBox>
                        <BookIcon height="37px">
                          <Book fill={type} />
                        </BookIcon>
                        <FlexTitle>
                          <BookTitle>
                            {validationWordLength(75, name)}
                          </BookTitle>
                          <List>
                            <BookText>
                              <BooksGetContent
                                size="14px"
                                height="17px"
                                left="640px"
                                width="360px"
                              >
                                {validationWordLength(47, author)}
                              </BooksGetContent>
                            </BookText>
                            <BookText>
                              <BooksGetContent
                                size="14px"
                                height="17px"
                                left="1023px"
                              >
                                {year}
                              </BooksGetContent>
                            </BookText>
                            <BookText>
                              <BooksGetContent
                                size="14px"
                                height="17px"
                                left="1144px"
                              >
                                {pages}
                              </BooksGetContent>
                            </BookText>
                            <BookText></BookText>
                          </List>
                        </FlexTitle>
                      </ContentBox>
                    </>
                  )}
                </LibraryBox>
              );
            })}
          </CollectionBox>
        </PosContainer>
      ) : null}
    </>
  );
};

export default InActionBooks;
