import { useCallback, useState } from 'react';
import { statusKeys } from 'helpers/config';

import StatGraph from './StatGraph';

import { DashBox } from './Dashboard.styled';

const Dashboard = ({ responce }) => {
  const [readingPlan, setReadingPlan] = useState(0);

  useCallback(setReadingPlan, [setReadingPlan]);

  return (
    <DashBox>
      {responce.status === statusKeys().active && (
        <p>
          Кількість сторінок / день<span>{readingPlan}</span>
        </p>
      )}
      {responce.status === statusKeys().failed && (
        <p>
          Залишилось прочитати сторінок<span>{readingPlan}</span>
        </p>
      )}
      {responce.status === statusKeys().successDone && (
        <p>Ви успішно виконали тренування</p>
      )}

      <StatGraph responce={responce} getReadingPlan={setReadingPlan} />
      <p className="x-axes-label">час</p>
    </DashBox>
  );
};

export default Dashboard;
