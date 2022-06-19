import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { PageFormatContext, format } from 'context/pageFormatContext';
import { useSelector } from 'react-redux';
import { getStatus } from 'redux/training/training-selectors';

import {
  TimerContainer,
  TimerTitle,
  TimerFlex,
  BoxTimer,
  TimerAmout,
  TimerText,
  TimerBg,
  ColoredTimer,
} from './PlanTimer.styled';

const PlanTimer = ({ booksAmout = 0, days = 0, booksLeft = 0 }) => {
  const { t } = useTranslation();
  const pageFormat = useContext(PageFormatContext);
  const isActiveTraining = Boolean(useSelector(getStatus));

  const { mobile, response, tablet, desktop } = format;
  const isResponse = pageFormat === response;
  const isMobile = pageFormat === mobile;
  const isTablet = pageFormat === tablet;
  const isDesktop = pageFormat === desktop;

  return (
    <>
      {(isResponse || isMobile) && (
        <TimerContainer>
          <TimerTitle>{t('goals')}</TimerTitle>
          <TimerFlex>
            <BoxTimer>
              <TimerBg active={isActiveTraining}>
                <TimerAmout active={isActiveTraining}>{booksAmout}</TimerAmout>
              </TimerBg>
              <TimerText active={isActiveTraining}>
                {t('amountOfBooks')}
              </TimerText>
            </BoxTimer>
            <BoxTimer>
              <TimerBg active={isActiveTraining}>
                <TimerAmout active={isActiveTraining}>{days}</TimerAmout>
              </TimerBg>
              <TimerText active={isActiveTraining}>
                {t('amountOfDays')}
              </TimerText>
            </BoxTimer>
            {isActiveTraining && (
              <BoxTimer>
                <TimerBg active={isActiveTraining}>
                  <ColoredTimer active={isActiveTraining}>
                    {booksLeft}
                  </ColoredTimer>
                </TimerBg>
                <TimerText active={isActiveTraining}>
                  {t('booksLeft')}
                </TimerText>
              </BoxTimer>
            )}
          </TimerFlex>
        </TimerContainer>
      )}
      {isTablet && (
        <TimerContainer active={isActiveTraining}>
          <TimerTitle>{t('goals')}</TimerTitle>
          <TimerFlex>
            <BoxTimer active={isActiveTraining}>
              <TimerBg>
                <TimerAmout>{booksAmout}</TimerAmout>
              </TimerBg>
              <TimerText active={isActiveTraining}>
                {t('amountOfBooks')}
              </TimerText>
            </BoxTimer>
            <BoxTimer active={isActiveTraining}>
              <TimerBg>
                <TimerAmout>{days}</TimerAmout>
              </TimerBg>
              <TimerText active={isActiveTraining}>
                {t('amountOfDays')}
              </TimerText>
            </BoxTimer>
            {isActiveTraining && (
              <BoxTimer active={isActiveTraining}>
                <TimerBg>
                  <ColoredTimer>{booksLeft}</ColoredTimer>
                </TimerBg>
                <TimerText active={isActiveTraining}>
                  {t('booksLeft')}
                </TimerText>
              </BoxTimer>
            )}
          </TimerFlex>
        </TimerContainer>
      )}
      {isDesktop && (
        <TimerContainer>
          <TimerTitle active={isActiveTraining}>{t('goals')}</TimerTitle>
          <TimerFlex>
            <BoxTimer>
              <TimerBg active={isActiveTraining}>
                <TimerAmout active={isActiveTraining}>{booksAmout}</TimerAmout>
              </TimerBg>
              <TimerText active={isActiveTraining}>
                {t('amountOfBooks')}
              </TimerText>
            </BoxTimer>
            <BoxTimer>
              <TimerBg active={isActiveTraining}>
                <TimerAmout active={isActiveTraining}>{days}</TimerAmout>
              </TimerBg>
              <TimerText active={isActiveTraining}>
                {t('amountOfDays')}
              </TimerText>
            </BoxTimer>
            {isActiveTraining && (
              <BoxTimer>
                <TimerBg active={isActiveTraining}>
                  <ColoredTimer active={isActiveTraining}>
                    {booksLeft}
                  </ColoredTimer>
                </TimerBg>
                <TimerText active={isActiveTraining}>
                  {t('booksLeft')}
                </TimerText>
              </BoxTimer>
            )}
          </TimerFlex>
        </TimerContainer>
      )}
    </>
  );
};

export default PlanTimer;

PlanTimer.propTypes = {
  booksAmout: PropTypes.number,
  days: PropTypes.number,
  booksLeft: PropTypes.number,
};
