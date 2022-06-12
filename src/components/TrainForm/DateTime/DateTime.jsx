import React from 'react';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import moment from 'moment';
import 'moment/locale/uk';

import IconButton from '../../common/button/IconButton';
import { ReactComponent as CalendarIcon } from 'images/svg/calendar-form.svg';
import { ReactComponent as CalendarIconDowm } from 'images/svg/calendar-icon-down.svg';
import { Label, Input } from './DateTime.styled';

const DateTimeInput = ({ selectedDate, onChange, placeholderText }) => {
  const yesterday = moment().subtract(1, 'day');
  const disablePastDt = current => {
    return current.isAfter(yesterday);
  };

  const inputProps = {
    value: '',
  };

  const renderDateInput = (props, openCalendar) => {
    return (
      <Label>
        <IconButton
          className={'iconInput'}
          IconComponent={CalendarIcon}
          onClick={openCalendar}
        />
        <Input {...props} placeholder={placeholderText} />
        <IconButton
          className={'iconDownInput'}
          IconComponent={CalendarIconDowm}
          onClick={openCalendar}
        />
      </Label>
    );
  };

  return (
    <Datetime
      inputProps={!selectedDate ? inputProps : selectedDate}
      locale="uk"
      renderInput={renderDateInput}
      value={selectedDate}
      dateFormat="DD.MM.YYYY"
      placeholder={placeholderText}
      timeFormat={false}
      closeOnSelect
      onChange={date => onChange(date._d)}
      isValidDate={disablePastDt}
    />
  );
};

export default DateTimeInput;
