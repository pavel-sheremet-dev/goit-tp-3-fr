// import axios from 'axios';
import React from 'react';
import { useSelector } from 'react-redux';
import Section from 'components/common/section/Section';
import Countdown from '../components/Countdown';
import { StyledCountdownContainer } from './TrainingPage.styled';
import { getYear } from 'redux/trainings/trainings-selectors';
const nextYear = new Date().getFullYear() + 1;

// const token =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MjlmOWRkNDg4M2VkNmQ5YTI4M2QxMDUiLCJwZXJtaXNzaW9ucyI6W251bGxdLCJpYXQiOjE2NTQ2ODUyOTQsImV4cCI6MTY1NDc3MTY5NH0.cHzHXORYAD00LM2VdotUPVbW6R6EhDPHFLQMhPKoVgs';

// axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
// axios.defaults.headers.common = { Authorization: `Bearer ${token}` };

export const TrainingPage = () => {
  const year = useSelector(getYear);
  console.log(year);

  // axios.get('/api/trainings').then(res => console.log(res.data));
  return (
    <Section title="Статистика" isHidden>
      <StyledCountdownContainer>
        <Countdown
          deadline={new Date(nextYear, 0, 1)}
          title="До закінчення року залишилось"
        />
        <Countdown
          deadline={new Date(year)}
          title="До досягнення мети залишилось"
        />
      </StyledCountdownContainer>
    </Section>
  );
};

// это только основные моменты.

// При нажатии на "моє тренування" или иконку в хедере будет открываться эта страница.
// 1. если есть активная треннировка (запрос на бек) то 1.1 (это бекенд логика)
// 1.1 показываем всю статистику + добавление результатов
// 2. просроченная тренировка -- модальное окно / статистика / возможность добаления результатов не рендерим
// 3. нет треннировки:
// 3.1 Запрос на наличие библиотеки, если нет библиотеки, показываем шаги (условно модальное окно).
// 3.2 если библиотека книг есть (со статусом, непрочитанные), то открываем форму для добавления книги в лист
// кнопка + добавляет дополнительный книги.
// Кнопку "почати тренування" показываем только в случае, если есть хотя бы одна добавленная книга.

// Модалку про потерю данных можно показывать, когда есть добавленные книги, но не начата тренировка.
// Также, когда в результатах указано кол-во страниц, но нажата кнопка "Додати результат

// Скорее всего будет коллекция тренировок, в которой будет статус тренировки ['успешно пройденная', 'активная', 'неуспешная']
// 1.1 При загрузке страницы с треннировкой - идёт запрос на бек, бек смотрит есть ли в базе треннировка со статусом - активная - сравнивает текущее время, если время ушло, обновляет статус, возвращает треннировку, неуспешній статус будет означать показ модального окна. В таком случае рендерить формочку с добавлением результатов, думаю, что не стоит, только результирующую статистику.

export default TrainingPage;
