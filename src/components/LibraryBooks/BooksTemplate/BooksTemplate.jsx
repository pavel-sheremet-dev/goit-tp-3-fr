import { useContext } from 'react';
import { PageFormatContext, format } from 'context/pageFormatContext';
import { useTranslation } from 'react-i18next';
import { getTypeKeys } from 'helpers/libraryService';
import { getCssVars } from 'styles/vars';
import { nanoid } from '@reduxjs/toolkit';

import GetBookRating from '../GetBookRating';
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
                tablet={typeOf ? '215px' : '370px'}
                desktop={typeOf ? '360px' : '640px'}
              >
                {t('author')}
              </TitleListCategory>
              <TitleListCategory
                tablet={typeOf ? '345px' : '580px'}
                desktop={typeOf ? '630px' : '1030px'}
              >
                {t('year')}
              </TitleListCategory>
              <TitleListCategory
                tablet={typeOf ? '415px' : '645px'}
                desktop={typeOf ? '730px' : '1130px'}
              >
                {t('pages')}
              </TitleListCategory>
              {typeOf && (
                <TitleListCategory tablet="500px" desktop="880px">
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
                          <BookIcon
                            fill={
                              type === getTypeKeys().ReadingBooks
                                ? getCssVars().colors.mainBrandColor
                                : getCssVars().colors.placeholder
                            }
                          />
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
                            <BookIcon
                              fill={
                                type === getTypeKeys().ReadingBooks
                                  ? getCssVars().colors.mainBrandColor
                                  : getCssVars().colors.placeholder
                              }
                            />
                          </BoxIcon>
                          <BookNameOutput
                            text={book.name}
                            title={book.name}
                            length={typeOf ? 30 : 50}
                            margin={typeOf ? '0 25px 0 0' : '0 50px 0 0'}
                          />
                        </BookCategoryOutput>
                        <BookCategoryOutput
                          tablet={typeOf ? '130px' : '212px'}
                          desktop={typeOf ? '272px' : '392px'}
                        >
                          <BookAuthorOutputValid
                            text={book.author}
                            title={book.author}
                            length={typeOf ? 14 : 20}
                          />
                        </BookCategoryOutput>
                        <BookCategoryOutput
                          tablet={typeOf ? '70px' : '65px'}
                          desktop="100px"
                        >
                          <BookCategoryOutputPos>
                            {book.year}
                          </BookCategoryOutputPos>
                        </BookCategoryOutput>
                        <BookCategoryOutput
                          tablet={typeOf ? '84px' : 'auto'}
                          desktop="148px"
                        >
                          <BookCategoryOutputPos>
                            {book.pages}
                          </BookCategoryOutputPos>
                        </BookCategoryOutput>
                        {typeOf && (
                          <BookCategoryOutput>
                            <RatingContainer>
                              <GetBookRating
                                rating={book.rating}
                                tablet="84px"
                                desktop="148px"
                              />
                            </RatingContainer>
                          </BookCategoryOutput>
                        )}
                      </ListBookCategory>
                      {typeOf && (
                        <Button type="button" onClick={() => getId(book.id)}>
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
