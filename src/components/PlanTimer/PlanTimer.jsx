import PropTypes from 'prop-types';

import { useContext } from 'react';
import { PageFormatContext, format } from 'context/pageFormatContext';

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
  const pageFormat = useContext(PageFormatContext);
  const { mobile, response, tablet, desktop } = format;
  const isResponse = pageFormat === response;
  const isMobile = pageFormat === mobile;
  const isTablet = pageFormat === tablet;
  const isDesktop = pageFormat === desktop;

  return (
    <>
      {(isResponse || isMobile) && (
        <TimerContainer>
          <TimerTitle>Моя мета прочитати</TimerTitle>
          <TimerFlex>
            <BoxTimer>
              <TimerBg>
                <TimerAmout>{booksAmout}</TimerAmout>
              </TimerBg>
              <TimerText>Кількість книжок</TimerText>
            </BoxTimer>
            <BoxTimer>
              <TimerBg>
                <TimerAmout>{days}</TimerAmout>
              </TimerBg>
              <TimerText>Кількість днів</TimerText>
            </BoxTimer>
          </TimerFlex>
        </TimerContainer>
      )}
      {isTablet && (
        <TimerContainer>
          <TimerTitle>Моя мета прочитати</TimerTitle>
          <TimerFlex>
            <BoxTimer>
              <TimerBg>
                <TimerAmout>{booksAmout}</TimerAmout>
              </TimerBg>
              <TimerText>Кількість книжок</TimerText>
            </BoxTimer>
            <BoxTimer>
              <TimerBg>
                <TimerAmout>{days}</TimerAmout>
              </TimerBg>
              <TimerText>Кількість днів</TimerText>
            </BoxTimer>
          </TimerFlex>
        </TimerContainer>
      )}
      {isDesktop && (
        <TimerContainer>
          <TimerTitle>Моя мета прочитати</TimerTitle>
          <TimerFlex>
            <BoxTimer>
              <TimerBg>
                <TimerAmout>{booksAmout}</TimerAmout>
              </TimerBg>
              <TimerText>Кількість книжок</TimerText>
            </BoxTimer>
            <BoxTimer>
              <TimerBg>
                <TimerAmout>{days}</TimerAmout>
              </TimerBg>
              <TimerText>Кількість днів</TimerText>
            </BoxTimer>
            <BoxTimer>
              <TimerBg>
                <ColoredTimer>{booksLeft}</ColoredTimer>
              </TimerBg>
              <TimerText>Залишилось книжок</TimerText>
            </BoxTimer>
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
