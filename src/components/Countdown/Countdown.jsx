import React, { useState, useMemo, useEffect, useRef } from 'react';
import differenceInSeconds from 'date-fns/differenceInSeconds';
import {
  StyledTimer,
  Title,
  TimeList,
  TimeItem,
  Number,
  Word,
  Dots,
} from './Countdown.styled';

const ONE_DAY = 60 * 60 * 24;
const ONE_HOUR = 60 * 60;
const ONE_MINUTE = 60;

export default function Countdown({ title, deadline }) {
  const [currentTime, setCurrentTime] = useState(Date.now());
  const intervalId = useRef(null);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      setCurrentTime(state => state + 1000);
    }, 1000);
    return () => {
      clearInterval(intervalId.current);
    };
  }, []);

  const getCoundown = () => {
    const diffInSeconds = differenceInSeconds(deadline, currentTime);
    if (diffInSeconds < 1) {
      clearInterval(intervalId.current);
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(diffInSeconds / ONE_DAY);
    const hours = Math.floor((diffInSeconds - days * ONE_DAY) / ONE_HOUR);
    const minutes = Math.floor(
      (diffInSeconds - days * ONE_DAY - hours * ONE_HOUR) / ONE_MINUTE,
    );
    const seconds =
      diffInSeconds - days * ONE_DAY - hours * ONE_HOUR - minutes * ONE_MINUTE;
    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const countdown = useMemo(getCoundown, [currentTime, deadline]);

  return (
    <StyledTimer>
      <Title>{title}</Title>
      <TimeList>
        <TimeItem>
          <Number>{countdown.days}</Number>
          <Word>ДН</Word>
        </TimeItem>
        <Dots>:</Dots>
        <TimeItem>
          <Number>{countdown.hours}</Number>
          <Word>ГОД</Word>
        </TimeItem>
        <Dots>:</Dots>
        <TimeItem>
          <Number>{countdown.minutes}</Number>
          <Word>ХВ</Word>
        </TimeItem>
        <Dots>:</Dots>
        <TimeItem>
          <Number>{countdown.seconds}</Number>
          <Word>СЕК</Word>
        </TimeItem>
      </TimeList>
    </StyledTimer>
  );
}
