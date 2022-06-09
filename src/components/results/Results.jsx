import Datetime from 'react-datetime';
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

const DateTimeInput = ({ selectedDate, onChange, startDate }) => {
  const valid = current => {
    return current.isAfter(startDate);
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
      renderInput={renderInput}
      value={selectedDate}
      dateFormat="DD.MM.YYYY"
      timeFormat={false}
      isValidDate={valid}
      closeOnClickOutside
      closeOnSelect
      locale="uk"
      onChange={date => onChange(date._d)}
    />
  );
};
const Results = ({ startDate, onSubmit }) => {
  const [date, setDate] = useState('');
  const [pages, setPages] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ date: Date.parse(date), pages });
    setDate('');
    setPages('');
  };
  return (
    <Wrapper>
      <Title>РЕЗУЛЬТАТИ</Title>
      <Form onSubmit={handleSubmit}>
        <DateTimeInput
          selectedDate={date}
          onChange={setDate}
          startDate={startDate}
        />
        <Label>
          <span>Кількість сторінок</span>
          <InputDate
            name="number"
            type="text"
            placeholder="..."
            maxLength="4"
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
