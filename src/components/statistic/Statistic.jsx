import { StatisticItem } from './StatisticItem';
import { Title, List } from './Statistic.styled';

const Statistic = ({ results }) => {
  const pad = value => {
    return String(value).padStart(2, '0');
  };
  return (
    <>
      <Title>СТАТИСТИКА</Title>
      <List>
        {results.map(({ date, pointResult }) => {
          const currentDate = new Date(date);
          const day = pad(currentDate.getDate());
          const month = pad(currentDate.getMonth());
          const year = currentDate.getFullYear();
          const hours = pad(currentDate.getHours());
          const minutes = pad(currentDate.getMinutes());
          const seconds = pad(currentDate.getSeconds());
          const dateResult = `${day}.${month}.${year}`;
          const time = `${hours}:${minutes}:${seconds}`;
          return (
            <StatisticItem
              key={date}
              date={dateResult}
              time={time}
              pages={pointResult}
            />
          );
        })}
      </List>
    </>
  );
};

export default Statistic;
