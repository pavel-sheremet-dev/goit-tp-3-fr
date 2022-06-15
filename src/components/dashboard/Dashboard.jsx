import { useCallback, useState } from 'react';
import { DashBox } from './Dashboard.styled';
import StatGraph from './StatGraph';

const Dashboard = ({ responce }) => {
  const [readingPlan, setReadingPlan] = useState(0);

  useCallback(setReadingPlan, [setReadingPlan]);

  return (
    <DashBox>
      <div className="lineyka"></div>
      {responce.status === 'active' && (
        <p>
          Кількість сторінок / день<span>{readingPlan}</span>
        </p>
      )}
      {responce.status === 'failed' && (
        <p>
          Залишилось прочитати сторінок<span>{readingPlan}</span>
        </p>
      )}
      {responce.status === 'successDone' && (
        <p>Ви успішно виконали тренування</p>
      )}

      <StatGraph responce={responce} getReadingPlan={setReadingPlan} />
      <p className="x-axes-label">час</p>
    </DashBox>
  );
};

export default Dashboard;
