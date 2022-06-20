import { useSelector } from 'react-redux';
import EllipsisText from 'react-ellipsis-text';
import { useTranslation } from 'react-i18next';

import { trainingSelectors } from 'redux/training';
import { ReactComponent as CheckIcon } from 'assets/images/svg/icon-check.svg';
import {
  Wrapper,
  ListBooks,
  HeaderList,
  HeaderListItem,
  ItemBooks,
  Item,
  TextItem,
  TitleItem,
} from './ActiveTrainList.styled';

const ActiveTrainList = () => {
  const getTrainingBooks = useSelector(trainingSelectors.getBooks);
  const { t } = useTranslation();

  return (
    <Wrapper>
      <HeaderList>
        <HeaderListItem>{t('title')}</HeaderListItem>
        <HeaderListItem>{t('author')}</HeaderListItem>
        <HeaderListItem>{t('year')}</HeaderListItem>
        <HeaderListItem>{t('pages')}</HeaderListItem>
      </HeaderList>

      <ListBooks>
        {getTrainingBooks.length &&
          getTrainingBooks.map(({ id, name, author, year, pages, status }) => (
            <ItemBooks key={id}>
              <span className="checkIcon">
                {status === 'finished' && <CheckIcon />}
              </span>

              <Item className={'titleBook'}>
                <EllipsisText text={name} length={30} />
              </Item>

              <Item className={'authorBook'}>
                <TitleItem className="isHiddenItem">{t('author')}:</TitleItem>
                <TextItem> {author}</TextItem>
              </Item>

              <Item className={'yearBook'}>
                <TitleItem className="isHiddenItem">{t('year')}:</TitleItem>
                <TextItem> {year}</TextItem>
              </Item>

              <Item className={'pagesBook'}>
                <TitleItem className="isHiddenItem">{t('pages')}:</TitleItem>
                <TextItem> {pages}</TextItem>
              </Item>
            </ItemBooks>
          ))}
      </ListBooks>
    </Wrapper>
  );
};

export default ActiveTrainList;
