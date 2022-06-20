import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import moment from 'moment';
import 'moment/locale/uk';

import IconButton from '../../buttons/button/IconButton';
import { ReactComponent as CalendarIcon } from 'assets/images/svg/calendar-form.svg';
import { ReactComponent as CalendarIconDowm } from 'assets/images/svg/calendar-icon-down.svg';
import { Label, Input } from './DateTime.styled';

import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const language = i18next.use(LanguageDetector);

const DateTimeInput = ({
  selectedDate,
  onChange,
  placeholderText,
  disabled,
}) => {
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
          disabled={disabled}
        />
        <Input {...props} disabled={disabled} placeholder={placeholderText} />
        <IconButton
          disabled={disabled}
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
      locale={language.resolvedLanguage === 'ua' ? 'uk' : 'en'}
      renderInput={renderDateInput}
      value={selectedDate}
      dateFormat="DD.MM.YYYY"
      placeholder={placeholderText}
      timeFormat={false}
      closeOnSelect
      onChange={date => onChange(date._d)}
      isValidDate={disablePastDt}
      utc={true}
    />
  );
};

export default DateTimeInput;
