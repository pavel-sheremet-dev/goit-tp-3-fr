import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { PageFormatContext, format } from 'context/pageFormatContext';
import { useSelector } from 'react-redux';
import { getStatus } from 'redux/training/training-selectors';
import { statusKeys } from 'helpers/config';

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
  const status = useSelector(getStatus);

  const { mobile, response, tablet, desktop } = format;
  const isResponse = pageFormat === response;
  const isMobile = pageFormat === mobile;
  const isTablet = pageFormat === tablet;
  const isDesktop = pageFormat === desktop;

  const activeStatus = status === statusKeys().active;

  return (
    <>
      {(isResponse || isMobile) && (
        <TimerContainer>
          <TimerTitle>{t('goals')}</TimerTitle>
          {status !== statusKeys().active ? (
            <TimerFlex>
              <BoxTimer>
                <TimerBg active={activeStatus}>
                  <TimerAmout active={activeStatus}>0</TimerAmout>
                </TimerBg>
                <TimerText active={activeStatus}>
                  {t('amountOfBooks')}
                </TimerText>
              </BoxTimer>
              <BoxTimer>
                <TimerBg active={activeStatus}>
                  <TimerAmout active={activeStatus}>0</TimerAmout>
                </TimerBg>
                <TimerText active={activeStatus}>{t('amountOfDays')}</TimerText>
              </BoxTimer>
            </TimerFlex>
          ) : (
            <TimerFlex>
              <BoxTimer>
                <TimerBg active={activeStatus}>
                  <TimerAmout active={activeStatus}>{booksAmout}</TimerAmout>
                </TimerBg>
                <TimerText active={activeStatus}>
                  {t('amountOfBooks')}
                </TimerText>
              </BoxTimer>
              <BoxTimer>
                <TimerBg active={activeStatus}>
                  <TimerAmout active={activeStatus}>{days}</TimerAmout>
                </TimerBg>
                <TimerText active={activeStatus}>{t('amountOfDays')}</TimerText>
              </BoxTimer>
              <BoxTimer>
                <TimerBg active={activeStatus}>
                  <ColoredTimer active={activeStatus}>{booksLeft}</ColoredTimer>
                </TimerBg>
                <TimerText active={activeStatus}>{t('booksLeft')}</TimerText>
              </BoxTimer>
            </TimerFlex>
          )}
        </TimerContainer>
      )}
      {isTablet && (
        <TimerContainer active={activeStatus}>
          <TimerTitle>{t('goals')}</TimerTitle>
          {status !== statusKeys().active ? (
            <TimerFlex>
              <BoxTimer active={activeStatus}>
                <TimerBg>
                  <TimerAmout>0</TimerAmout>
                </TimerBg>
                <TimerText active={activeStatus}>
                  {t('amountOfBooks')}
                </TimerText>
              </BoxTimer>
              <BoxTimer active={activeStatus}>
                <TimerBg>
                  <TimerAmout>0</TimerAmout>
                </TimerBg>
                <TimerText active={activeStatus}>{t('amountOfDays')}</TimerText>
              </BoxTimer>
            </TimerFlex>
          ) : (
            <TimerFlex>
              <BoxTimer active={activeStatus}>
                <TimerBg>
                  <TimerAmout>{booksAmout}</TimerAmout>
                </TimerBg>
                <TimerText active={activeStatus}>
                  {t('amountOfBooks')}
                </TimerText>
              </BoxTimer>
              <BoxTimer active={activeStatus}>
                <TimerBg>
                  <TimerAmout>{days}</TimerAmout>
                </TimerBg>
                <TimerText active={activeStatus}>{t('amountOfDays')}</TimerText>
              </BoxTimer>
              <BoxTimer active={activeStatus}>
                <TimerBg>
                  <ColoredTimer>{booksLeft}</ColoredTimer>
                </TimerBg>
                <TimerText active={activeStatus}>{t('booksLeft')}</TimerText>
              </BoxTimer>
            </TimerFlex>
          )}
        </TimerContainer>
      )}
      {isDesktop && (
        <TimerContainer>
          <TimerTitle active={activeStatus}>{t('goals')}</TimerTitle>
          {status !== statusKeys().active ? (
            <TimerFlex>
              <BoxTimer>
                <TimerBg active={activeStatus}>
                  <TimerAmout active={activeStatus}>0</TimerAmout>
                </TimerBg>
                <TimerText active={activeStatus}>
                  {t('amountOfBooks')}
                </TimerText>
              </BoxTimer>
              <BoxTimer>
                <TimerBg active={activeStatus}>
                  <TimerAmout active={activeStatus}>0</TimerAmout>
                </TimerBg>
                <TimerText active={activeStatus}>{t('amountOfDays')}</TimerText>
              </BoxTimer>
            </TimerFlex>
          ) : (
            <TimerFlex>
              <BoxTimer>
                <TimerBg active={activeStatus}>
                  <TimerAmout active={activeStatus}>{booksAmout}</TimerAmout>
                </TimerBg>
                <TimerText active={activeStatus}>
                  {t('amountOfBooks')}
                </TimerText>
              </BoxTimer>
              <BoxTimer>
                <TimerBg active={activeStatus}>
                  <TimerAmout active={activeStatus}>{days}</TimerAmout>
                </TimerBg>
                <TimerText active={activeStatus}>{t('amountOfDays')}</TimerText>
              </BoxTimer>
              <BoxTimer>
                <TimerBg active={activeStatus}>
                  <ColoredTimer active={activeStatus}>{booksLeft}</ColoredTimer>
                </TimerBg>
                <TimerText active={activeStatus}>{t('booksLeft')}</TimerText>
              </BoxTimer>
            </TimerFlex>
          )}
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
