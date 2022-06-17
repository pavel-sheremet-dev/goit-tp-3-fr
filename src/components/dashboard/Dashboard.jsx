import { useCallback, useState } from 'react';
import { statusKeys } from 'helpers/config';
import { useTranslation } from 'react-i18next';

import StatGraph from './StatGraph';

import { DashBox } from './Dashboard.styled';

const Dashboard = ({ responce }) => {
  const { t } = useTranslation();
  const [readingPlan, setReadingPlan] = useState(0);

  useCallback(setReadingPlan, [setReadingPlan]);

  return (
    <DashBox>
      {responce.status === statusKeys().active && (
        <p>
          {t('amountPages')}
          <span>{readingPlan}</span>
        </p>
      )}
      {responce.status === statusKeys().failed && (
        <p>
          {t('remains')}
          <span>{readingPlan}</span>
        </p>
      )}
      {responce.status === statusKeys().successDone && <p>{t('completed')}</p>}

      <StatGraph responce={responce} getReadingPlan={setReadingPlan} />
      <p className="x-axes-label">{t('time')}</p>
    </DashBox>
  );
};

export default Dashboard;
