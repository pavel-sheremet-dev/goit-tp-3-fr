import Section from 'components/common/section/Section';
import Dashboard from 'components/dashboard/Dashboard';
import Countdown from '../components/Countdown';
import { StyledCountdownContainer } from './TrainingPage.styled';

const nextYear = new Date().getFullYear() + 1;

const responce = {
  startDate: '2022-06-20T01:42:27.042Z',
  deadlineDate: '2022-06-25T01:43:27.042Z',
  totalPages: 230,
  readedPages: 105,
  results: [
    {
      date: '2022-06-20T01:42:27.042Z',
      pointResult: 30,
    },
    {
      date: '2022-06-21T05:50:52.336Z',
      pointResult: 20,
    },
    {
      date: '2022-06-21T09:42:11.411Z',
      pointResult: 15,
    },
    {
      date: '2022-06-21T09:42:11.411Z',
      pointResult: 2,
    },
    {
      date: '2022-06-22T09:42:11.411Z',
      pointResult: 30,
    },
    {
      date: '2022-06-23T09:42:11.411Z',
      pointResult: 50,
    },
    {
      date: '2022-06-24T09:42:11.411Z',
      pointResult: 20,
    },
    {
      date: '2022-06-25T09:42:11.411Z',
      pointResult: 40,
    },
    {
      date: '2022-06-25T09:42:11.411Z',
      pointResult: 10,
    },
    {
      date: '2022-06-29T09:42:11.411Z',
      pointResult: 20,
    },
    {
      date: '2022-06-29T09:42:11.411Z',
      pointResult: 20,
    },
    {
      date: '2022-06-29T09:42:11.411Z',
      pointResult: 30,
    },
    {
      date: '2022-06-30T09:42:11.411Z',
      pointResult: 30,
    },
  ],
};

export const TrainingPage = () => {
  return (
    <Section title="Статистика" titleLevel={'h1'} isHidden>
      <StyledCountdownContainer>
        <Countdown
          deadline={new Date(nextYear, 0, 1)}
          title="До закінчення року залишилось"
        />
        <Countdown
          deadline={new Date(2022, 7, 1)}
          title="До досягнення мети залишилось"
        />
      </StyledCountdownContainer>
      <Dashboard responce={responce} />
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
