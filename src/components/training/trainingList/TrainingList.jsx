import React from 'react';
import EllipsisText from 'react-ellipsis-text';
import { useTranslation } from 'react-i18next';

import IconButton from 'components/buttons/button/IconButton';
import { ReactComponent as BookIcon } from 'assets/images/svg/icon-book.svg';
import { ReactComponent as DeleteIcon } from 'assets/images/svg/icon-delete.svg';

import {
  Wrapper,
  ListBooks,
  HeaderList,
  HeaderListItem,
  ItemBooks,
  Item,
  TitleItem,
  TextItem,
  EmptyItem,
  EmptyTextItem,
  Placeholder,
} from './TrainingList.styled';

const TrainingList = ({ books = [], handleUpdateBook, style }) => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <HeaderList>
        <HeaderListItem>{t('title')}</HeaderListItem>
        <HeaderListItem>{t('author')}</HeaderListItem>
        <HeaderListItem>{t('year')}</HeaderListItem>
        <HeaderListItem>{t('pages')}</HeaderListItem>
      </HeaderList>

      <ListBooks style={style}>
        {!books.length ? (
          <EmptyItem>
            <BookIcon style={{ fill: '#A6ABB9' }} className={'someClass'} />
            <EmptyTextItem>
              <Placeholder>...</Placeholder>
            </EmptyTextItem>

            <EmptyTextItem className="isHiddenItem">
              <TitleItem>{t('author')}:</TitleItem>
              <Placeholder>...</Placeholder>
            </EmptyTextItem>

            <EmptyTextItem className="isHiddenItem">
              <TitleItem>{t('year')}: </TitleItem>
              <Placeholder>...</Placeholder>
            </EmptyTextItem>

            <EmptyTextItem className="isHiddenItem">
              <TitleItem>{t('pages')}: </TitleItem>
              <Placeholder>...</Placeholder>
            </EmptyTextItem>
          </EmptyItem>
        ) : (
          books.map(({ id, name, author, year, pages }) => (
            <ItemBooks key={id}>
              <BookIcon style={{ fill: '#A6ABB9' }} className={'someClass'} />
              <Item style={{ width: '180px' }}>
                <EllipsisText text={name} length={30} className={'titleBook'} />
                <TextItem className="isHiddenItem">{name}</TextItem>
              </Item>

              <Item style={{ width: '170px' }}>
                <TitleItem className="isHiddenItem">{t('author')}:</TitleItem>
                <TextItem> {author}</TextItem>
              </Item>

              <Item style={{ width: '125px' }}>
                <TitleItem className="isHiddenItem">{t('year')}:</TitleItem>
                <TextItem> {year}</TextItem>
              </Item>

              <Item style={{ width: '24px', marginRight: '55px' }}>
                <TitleItem className="isHiddenItem">{t('pages')}:</TitleItem>
                <TextItem> {pages}</TextItem>
              </Item>
              <IconButton
                type="button"
                className={'iconDelete'}
                IconComponent={DeleteIcon}
                onClick={() => handleUpdateBook(id)}
              />
            </ItemBooks>
          ))
        )}
      </ListBooks>
    </Wrapper>
  );
};

export default TrainingList;
