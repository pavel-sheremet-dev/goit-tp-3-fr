import React from 'react';
import EllipsisText from 'react-ellipsis-text';

import IconButton from '../buttons/button/IconButton';
import { ReactComponent as BookIcon } from 'images/svg/icon-book.svg';
import { ReactComponent as DeleteIcon } from 'images/svg/icon-delete.svg';

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
  return (
    <Wrapper>
      <HeaderList>
        <HeaderListItem>Назва книги</HeaderListItem>
        <HeaderListItem>Автор</HeaderListItem>
        <HeaderListItem>Рік</HeaderListItem>
        <HeaderListItem>Стор.</HeaderListItem>
      </HeaderList>

      <ListBooks style={style}>
        {!books.length ? (
          <EmptyItem>
            <BookIcon style={{ fill: '#A6ABB9' }} className={'someClass'} />
            <EmptyTextItem>
              <Placeholder>...</Placeholder>
            </EmptyTextItem>

            <EmptyTextItem className="isHiddenItem">
              <TitleItem>Автор:</TitleItem>
              <Placeholder>...</Placeholder>
            </EmptyTextItem>

            <EmptyTextItem className="isHiddenItem">
              <TitleItem>Рік: </TitleItem>
              <Placeholder>...</Placeholder>
            </EmptyTextItem>

            <EmptyTextItem className="isHiddenItem">
              <TitleItem>Стор: </TitleItem>
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
                <TitleItem className="isHiddenItem">Автор:</TitleItem>
                <TextItem> {author}</TextItem>
              </Item>

              <Item style={{ width: '125px' }}>
                <TitleItem className="isHiddenItem">Рік:</TitleItem>
                <TextItem> {year}</TextItem>
              </Item>

              <Item style={{ width: '24px', marginRight: '55px' }}>
                <TitleItem className="isHiddenItem">Стор.:</TitleItem>
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
