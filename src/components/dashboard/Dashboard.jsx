import { getPagesPerDay } from 'helpers/chartService';
import { DashBox } from './Dashboard.styled';
import StatGraph from './StatGraph';

const Dashboard = ({ responce }) => {
  const { startDate, deadlineDate, totalPages } = responce;

  const pagesPerDay = getPagesPerDay(startDate, deadlineDate, totalPages);

  return (
    <DashBox>
      <p>
        Кількість сторінок / день<span>{pagesPerDay}</span>
      </p>
      <StatGraph responce={responce} />
      <p className="x-axes-label">час</p>
    </DashBox>
  );
};

export default Dashboard;
