import { useTranslation } from 'react-i18next';
import { Item, Date, Time, Page, PagesName } from './Statistic.styled';

export const StatisticItem = ({ date, time, pages }) => {
  const { t } = useTranslation();
  return (
    <Item>
      <Date>{date}</Date>
      <Time>{time}</Time>
      <PagesName>
        <Page>{pages}</Page>
        {t('littlePages')}
      </PagesName>
    </Item>
  );
};
