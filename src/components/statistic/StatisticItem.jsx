import { Item, Date, Time, Page, PagesName } from './Statistic.styled';

export const StatisticItem = ({ date, time, pages }) => {
  return (
    <Item>
      <Date>{date}</Date>
      <Time>{time}</Time>
      <PagesName>
        <Page>{pages}</Page>
        стор.
      </PagesName>
    </Item>
  );
};
