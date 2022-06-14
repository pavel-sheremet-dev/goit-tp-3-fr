import React from 'react';
import { useSelector } from 'react-redux';
import EllipsisText from 'react-ellipsis-text';

import { trainingSelectors } from 'redux/training';
import { ReactComponent as CheckIcon } from 'images/svg/icon-check.svg';
import {
  Wrapper,
  ListBooks,
  HeaderList,
  HeaderListItem,
  ItemBooks,
  Item,
  TextItem,
  TitleItem
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
              <span className="checkIcon">
                {getTrainingBooks.status === 'finished' && <CheckIcon />}
              </span>

              <Item className={'titleBook'}>
                <EllipsisText text={name} length={30} />
              </Item>

              <Item className={"authorBook"}>
                <TitleItem className="isHiddenItem">Автор:</TitleItem>
                <TextItem> {author}</TextItem>
              </Item>

              <Item className={'yearBook'}>
                <TitleItem className="isHiddenItem">Рік:</TitleItem>
                <TextItem> {year}</TextItem>
              </Item>

              <Item className={'pagesBook'}>
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
