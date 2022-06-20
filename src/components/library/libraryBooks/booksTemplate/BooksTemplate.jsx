import { useContext } from 'react';
import { PageFormatContext, format } from 'context/pageFormatContext';
import { useTranslation } from 'react-i18next';
import { getTypeKeys } from 'helpers/libraryService';
import { nanoid } from '@reduxjs/toolkit';

import GetBookRating from '../getBookRating';
import {
  PositionContainer,
  Title,
  TitleList,
  TitleListCategory,
  List,
  ListCategory,
  Box,
  BoxPreview,
  BoxContent,
  BookNameOutput,
  BookContentOutput,
  BookAuthorOutputValid,
  ListBookCategory,
  BookCategoryOutput,
  BookCategoryOutputPos,
  BoxIcon,
  BookIcon,
  Button,
  RatingContainer,
} from './BooksTemplate.styled';

const BooksTemplate = ({ options = [], getId, type, title }) => {
  const { t } = useTranslation();
  const pageFormat = useContext(PageFormatContext);
  const typeOf = type === getTypeKeys().FinishedBooks;

  const { mobile, response, tablet, desktop } = format;
  const isResponse = pageFormat === response;
  const isMobile = pageFormat === mobile;
  const isTablet = pageFormat === tablet;
  const isDesktop = pageFormat === desktop;

  return (
    <>
      {options.length >= 1 ? (
        <PositionContainer>
          <Title>{title}</Title>
          {(isTablet || isDesktop) && (
            <TitleList>
              <TitleListCategory position="inherit">
                {t('title')}
              </TitleListCategory>
              <TitleListCategory
                lefttablet={typeOf ? '216px' : '368px'}
                leftdesktop={typeOf ? '360px' : '640px'}
              >
                {t('author')}
              </TitleListCategory>
              <TitleListCategory
                tablet={typeOf ? '336px' : '100px'}
                desktop={typeOf ? '595px' : '195px'}
              >
                {t('year')}
              </TitleListCategory>
              <TitleListCategory
                tablet={typeOf ? '260px' : '20px'}
                desktop={typeOf ? '480px' : '80px'}
              >
                {t('pages')}
              </TitleListCategory>
              {typeOf && (
                <TitleListCategory lefttablet="475px" leftdesktop="880px">
                  {isTablet ? t('rating') : t('ratingOfBook')}
                </TitleListCategory>
              )}
            </TitleList>
          )}
          <List>
            {options.map(book => {
              return (
                <ListCategory key={nanoid()}>
                  {(isResponse || isMobile) && (
                    <Box>
                      <BoxPreview>
                        <BoxIcon>
                          <BookIcon fill={type} />
                        </BoxIcon>
                        <BoxContent margin={typeOf && '0 0 24px 0'}>
                          <BookNameOutput
                            text={book.name}
                            title={book.name}
                            length={50}
                          />
                          <ListBookCategory>
                            <BookCategoryOutput>
                              {t('author')}:
                              <BookAuthorOutputValid
                                text={book.author}
                                title={book.author}
                                length={15}
                              />
                            </BookCategoryOutput>
                            <BookCategoryOutput>
                              {t('year')}:
                              <BookContentOutput>{book.year}</BookContentOutput>
                            </BookCategoryOutput>
                            <BookCategoryOutput>
                              {t('pages')}:
                              <BookContentOutput>
                                {book.pages}
                              </BookContentOutput>
                            </BookCategoryOutput>
                            {typeOf && (
                              <BookCategoryOutput display="flex" align="center">
                                {t('rating')}:
                                <RatingContainer>
                                  <GetBookRating rating={book.rating} />
                                </RatingContainer>
                              </BookCategoryOutput>
                            )}
                          </ListBookCategory>
                        </BoxContent>
                      </BoxPreview>
                      {typeOf && (
                        <Button type="button" onClick={() => getId(book.id)}>
                          {t('resume')}
                        </Button>
                      )}
                    </Box>
                  )}
                  {(isTablet || isDesktop) && (
                    <Box>
                      <ListBookCategory>
                        <BookCategoryOutput
                          tablet={typeOf ? '195px' : '348px'}
                          desktop={typeOf ? '338px' : '618px'}
                        >
                          <BoxIcon>
                            <BookIcon fill={type} />
                          </BoxIcon>
                          <BookNameOutput
                            text={book.name}
                            title={book.name}
                            length={typeOf ? 30 : 50}
                            margin={typeOf ? '0 25px 0 0' : '0 50px 0 0'}
                          />
                        </BookCategoryOutput>
                        <BookCategoryOutput
                          tablet={typeOf ? '122px' : '205px'}
                          desktop={typeOf ? '265px' : '385px'}
                        >
                          <BookAuthorOutputValid
                            text={book.author}
                            title={book.author}
                            length={typeOf ? 12 : 20}
                          />
                        </BookCategoryOutput>
                        <BookCategoryOutput
                          tablet={typeOf ? '65px' : '75px'}
                          desktop={typeOf ? '100px' : '108px'}
                        >
                          <BookCategoryOutputPos>
                            {book.year}
                          </BookCategoryOutputPos>
                        </BookCategoryOutput>
                        <BookCategoryOutput
                          tablet={typeOf ? '42px' : '35px'}
                          desktop={typeOf ? '45px' : '35px'}
                        >
                          <BookCategoryOutputPos
                            margin={typeOf ? '0 0 0 auto' : '0 0 0 auto'}
                          >
                            {book.pages}
                          </BookCategoryOutputPos>
                        </BookCategoryOutput>
                        {typeOf && (
                          <BookCategoryOutput tablet="116px" desktop="196px">
                            <RatingContainer>
                              <GetBookRating rating={book.rating} />
                            </RatingContainer>
                          </BookCategoryOutput>
                        )}
                      </ListBookCategory>
                      {typeOf && (
                        <Button
                          type="button"
                          id="butt"
                          onClick={() => getId(book.id)}
                        >
                          {t('resume')}
                        </Button>
                      )}
                    </Box>
                  )}
                </ListCategory>
              );
            })}
          </List>
        </PositionContainer>
      ) : (
        <></>
      )}
    </>
  );
};

export default BooksTemplate;
