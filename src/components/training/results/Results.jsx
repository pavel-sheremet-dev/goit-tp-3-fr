import { useState } from 'react';
import { useSelector } from 'react-redux';
import { trainingSelectors } from 'redux/training';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { updateActiveTraining } from 'redux/training/training-operations';

import Datetime from 'react-datetime';
import moment from 'moment';
import { toast } from 'react-toastify';
import 'moment/locale/uk';

import IconButton from 'components/buttons/button/IconButton';
import {
  Title,
  InputDate,
  Label,
  ButtonDate,
  Form,
  Wrapper,
} from './Results.styled';
import { ReactComponent as CalendarIconDown } from 'assets/images/svg/calendar-icon-down.svg';

import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const language = i18next.use(LanguageDetector);

const getStartDay = (deadlineDate, results) => {
  if (Date.now() < Date.parse(deadlineDate)) {
    return results[results.length - 1]?.date;
  }
  if (Date.now() > Date.parse(deadlineDate)) {
    const prevDay = new Date(new Date() - 1000 * 60 * 60 * 24);
    const lastResult = results[results.length - 1]?.date;
    return lastResult < prevDay ? prevDay : lastResult;
  }
};
const getFinishDay = deadlineDate => {
  if (Date.now() < Date.parse(deadlineDate)) {
    return new Date();
  }
  return deadlineDate;
};

const DateTimeInput = ({
  selectedDate,
  onChange,
  startDate,
  finishDate,
  date,
}) => {
  const status = useSelector(trainingSelectors.getStatus);
  const yesterday = moment().subtract(1, 'day');
  const valid = current => {
    if (!startDate) {
      return current.isAfter(yesterday) && current.isBefore(finishDate);
    }
    return (
      current.isSameOrAfter(startDate) && current.isSameOrBefore(finishDate)
    );
  };
  const inputProps = {
    value: '',
    disabled: status !== 'active',
  };
  const renderInput = (props, openCalendar) => {
    return (
      <Label>
        <span>{language.resolvedLanguage === 'uk' ? 'Дата' : 'Date'}</span>
        <InputDate {...props} />
        <IconButton
          className={'icon'}
          IconComponent={CalendarIconDown}
          onClick={openCalendar}
        />
      </Label>
    );
  };

  return (
    <Datetime
      className="datetime"
      inputProps={!date ? inputProps : selectedDate}
      renderInput={renderInput}
      value={selectedDate}
      dateFormat="DD.MM.YYYY"
      timeFormat={true}
      isValidDate={valid}
      closeOnClickOutside
      closeOnSelect
      locale={language.resolvedLanguage}
      onChange={date => {
        onChange(date._d);
      }}
    />
  );
};
// const Results = ({ startDate, finishDate }) => {
const Results = () => {
  const { t } = useTranslation();
  const [date, setDate] = useState('');
  const [pages, setPages] = useState('');
  const dispatch = useDispatch();
  const status = useSelector(trainingSelectors.getStatus);
  const deadlineDate = useSelector(trainingSelectors.getDeadlineDate);
  const traningResults = useSelector(trainingSelectors.getResult);

  const traningResultNormalize = traningResults.filter(
    item => item.pointResult,
  );

  const startDate = getStartDay(deadlineDate, traningResultNormalize);
  const finishDate = getFinishDay(deadlineDate);

  const handleSubmit = e => {
    e.preventDefault();
    if (!date || !pages) {
      return toast.error('Поля дати та сторінок мають бути заповнені');
    }
    dispatch(updateActiveTraining({ date, pointResult: pages }));

    setDate('');
    setPages('');
  };

  return (
    <Wrapper>
      <Title>{t('results')}</Title>
      <Form onSubmit={handleSubmit}>
        <DateTimeInput
          selectedDate={date}
          onChange={setDate}
          startDate={startDate}
          finishDate={finishDate}
          date={date}
        />
        <Label>
          <span>{t('amountOfPages')}</span>
          <InputDate
            name="number"
            type="number"
            placeholder="..."
            min={1}
            max={9999}
            value={status !== 'successDone' ? pages : ''}
            onChange={e => setPages(e.target.value)}
            disabled={status !== 'active'}
          />
        </Label>
        <ButtonDate type="submit" disabled={status !== 'active'}>
          {t('addResult')}
        </ButtonDate>
      </Form>
    </Wrapper>
  );
};

export default Results;
