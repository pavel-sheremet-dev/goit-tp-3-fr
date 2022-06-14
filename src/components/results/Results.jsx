import Datetime from 'react-datetime';
import moment from 'moment';
import { toast } from 'react-toastify';
import 'moment/locale/uk';
import {
  Title,
  InputDate,
  Label,
  ButtonDate,
  Form,
  Wrapper,
} from './Results.styled';
import { ReactComponent as CalendarIconDown } from 'images/svg/calendar-icon-down.svg';
import IconButton from 'components/common/button/IconButton';
import { useState } from 'react';

const DateTimeInput = ({
  selectedDate,
  onChange,
  startDate,
  finishDate,
  date,
}) => {
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
  };
  const renderInput = (props, openCalendar) => {
    return (
      <Label>
        <span>Дата</span>
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
      inputProps={!date ? inputProps : selectedDate}
      renderInput={renderInput}
      value={selectedDate}
      dateFormat="DD.MM.YYYY"
      timeFormat={false}
      isValidDate={valid}
      closeOnClickOutside
      closeOnSelect
      locale="uk"
      onChange={date => {
        onChange(date._d);
      }}
    />
  );
};
const Results = ({ startDate, finishDate, onSubmit }) => {
  const [date, setDate] = useState('');
  const [pages, setPages] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!date || !pages) {
      return toast.error('Поля дати та сторінок мають бути заповнені');
    }
    onSubmit({ date: date.toJSON(), pages });
    setDate('');
    setPages('');
  };

  console.log(startDate);
  console.log(finishDate);
  return (
    <Wrapper>
      <Title>РЕЗУЛЬТАТИ</Title>
      <Form onSubmit={handleSubmit}>
        <DateTimeInput
          selectedDate={date}
          onChange={setDate}
          startDate={startDate}
          finishDate={finishDate}
          date={date}
        />
        <Label>
          <span>Кількість сторінок</span>
          <InputDate
            name="number"
            type="number"
            placeholder="..."
            min={1}
            max={9999}
            value={pages}
            onChange={e => setPages(e.target.value)}
          />
        </Label>
        <ButtonDate type="submit">Додати результат</ButtonDate>
      </Form>
    </Wrapper>
  );
};

export default Results;
