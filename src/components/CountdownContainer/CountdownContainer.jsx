import { useTranslation } from 'react-i18next';
import Countdown from 'components/Countdown';
import { StyledCountdownContainer } from './CountdownContainer.styled';
import { Loader } from 'components/common/Loader/Loader';

const nextYear = new Date().getFullYear() + 1;

const CountdownContainer = ({
  isWaiting = false,
  deadline = Date.now() + 10 * 1000 * 24 * 60 * 60,
}) => {
  const { t } = useTranslation();
  return (
    <>
      {isWaiting && <Loader />}
      {!isWaiting && (
        <StyledCountdownContainer>
          <Countdown
            deadline={new Date(nextYear, 0, 1)}
            title={t('yearsCountdown')}
          />
          <Countdown
            deadline={new Date(deadline)}
            title={t('goalsCountdown')}
          />
        </StyledCountdownContainer>
      )}
    </>
  );
};

export default CountdownContainer;
