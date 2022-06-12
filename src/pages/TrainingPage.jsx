import Section from 'components/common/section/Section';
import Dashboard from 'components/dashboard/Dashboard';
import { ToastContainer } from 'react-toastify';
import Results from 'components/results/Results';
import { useState } from 'react';
import Countdown from '../components/Countdown';
import CountdownContainer from 'components/CountdownContainer';
import CongratsModal from 'components/CongratsModal';
import WellDoneModal from 'components/WellDoneModal';
import Statistic from 'components/statistic/Statistic';
import TrainForm from 'components/TrainForm/TrainForm';
import PlanTimer from 'components/PlanTimer';

const unreadBooks = [
  {
    id: '62a21382a6468598d2c0f0f7',
    name: 'Дюна',
    author: 'Френк Герберт',
    year: 1965,
    pages: 656,
    status: 'unread',
  },
  {
    id: '62a21314a6468598d2c0f0f0',
    name: 'Маленький принц',
    author: 'Антуант де Сент-Екзюпері',
    year: 1943,
    pages: 160,
    status: 'unread',
  },
  {
    id: '629ce5f830f87f7fb279b2a0',
    name: 'Жінка, яка має план',
    author: 'Мей Маск',
    year: 2021,
    pages: 224,
    status: 'unread',
  },
  {
    id: '629ce5f830f87f8fb279b2a1',
    name: '11/22/63',
    author: 'Стівен Кінг',
    year: 2011,
    pages: 976,
    status: 'unread',
  },
  {
    id: '629ce5f860f87f7fb279b2a2',
    name: 'Ігри, у які грають люди',
    author: 'Ерік Берн',
    year: 2016,
    pages: 256,
    status: 'unread',
  },
  {
    id: '629ce5f830f87f7fс279b2a3',
    name: 'Правда про справу Гаррі Квеберта',
    author: 'Жоель Діккер',
    year: 2017,
    pages: 704,
    status: 'unread',
  },
];

const responce = {
  status: 'failed',
  startDate: '2022-06-01',
  deadlineDate: '2022-06-10',
  totalPages: 200,
  readedPages: 130,
  results: [
    {
      date: '2022-06-02T01:42:27.042Z',
      pointResult: 0,
    },
    {
      date: '2022-06-04T02:42:27.042Z',
      pointResult: 0,
    },
    {
      date: '2022-06-05T14:42:27.042Z',
      pointResult: 50,
    },
    {
      date: '2022-06-07T19:42:27.042Z',
      pointResult: 50,
    },
    {
      date: '2022-06-09T08:42:27.042Z',
      pointResult: 100,
    },
  ],
};

const TrainingPage = () => {
  const modalText = {
    bookRead: 'Ще одна книга прочитана',
    trainingCompleted: 'Тренування завершено',
    registration: 'Вам на пошту надійшов лист із підтвердженням реєстрації',
  };
  const [results, setResult] = useState([]);

  const getStartDay = (deadlineDate, results) => {
    if (Date.now() < Date.parse(deadlineDate)) {
      return results[results.length - 1].date;
    }
    if (Date.now() > Date.parse(deadlineDate)) {
      const prevDay = new Date(new Date() - 1000 * 60 * 60 * 24);
      const lastResult = results[results.length - 1].date;
      return lastResult < prevDay ? prevDay : lastResult;
    }
  };
  const startDay = getStartDay(responce.deadlineDate, responce.results);

  return (
    <Section title="Статистика" titleLevel="h2" isHidden>
      <PlanTimer />
      <CongratsModal text={modalText.bookRead} />
      <CongratsModal text={modalText.trainingCompleted} />
      <CongratsModal text={modalText.registration} />
      <WellDoneModal />
      <CountdownContainer />

      <TrainForm unreadBooks={unreadBooks} />

      <Dashboard responce={responce} />
      <Results
        startDate={startDay}
        finishDate={responce.deadlineDate}
        onSubmit={obj => setResult([...results, obj])}
      />
      {/* <CountdownContainer /> */}
      <Dashboard responce={responce} />
      <Statistic results={responce.results} />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
      />
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
