import React from 'react';
import { useSelector } from 'react-redux';
import EllipsisText from 'react-ellipsis-text';

import { trainingSelectors } from 'redux/training';
import IconButton from '../common/button/IconButton';
import { ReactComponent as CheckIcon } from 'images/svg/icon-check.svg';
import {
  Wrapper,
  ListBooks,
  HeaderList,
  HeaderListItem,
  ItemBooks,
  Item,
  TitleItem,
  TextItem
  
} from './ActiveTrainList.styled';

const ActiveTrainList = () => {
  const getTrainingBooks = useSelector(trainingSelectors.getBooks);

  return (
    <Wrapper>
      <HeaderList>
        <HeaderListItem>Назва книги</HeaderListItem>
        <HeaderListItem>Автор</HeaderListItem>
        <HeaderListItem>Рік</HeaderListItem>
        <HeaderListItem>Стор.</HeaderListItem>
      </HeaderList>

      <ListBooks>
        {getTrainingBooks.length &&
          getTrainingBooks.map(({ id, name, author, year, pages }) => (
            <ItemBooks key={id}>
            <span className="checkIcon"><CheckIcon /></span>

              <Item style={{ width: '200px' }}>
                <EllipsisText text={name} length={30} className={'titleBook'} />
              </Item>

              <Item style={{ width: '200px' }}>
                <TitleItem className="isHiddenItem">Автор:</TitleItem>
                <TextItem> {author}</TextItem>
              </Item>

              <Item style={{ width: '170px' }}>
                <TitleItem className="isHiddenItem">Рік:</TitleItem>
                <TextItem> {year}</TextItem>
              </Item>

              <Item style={{ width: '30px', marginRight: '55px' }}>
                <TitleItem className="isHiddenItem">Стор.:</TitleItem>
                <TextItem> {pages}</TextItem>
              </Item>
            </ItemBooks>
          ))}
      </ListBooks>
    </Wrapper>
  );
};

export default ActiveTrainList;
