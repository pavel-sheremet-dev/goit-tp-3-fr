import Section from 'components/common/section/Section';
import Dashboard from 'components/dashboard/Dashboard';
import CountdownContainer from 'components/CountdownContainer';
import CongratsModal from 'components/CongratsModal';
import WellDoneModal from 'components/WellDoneModal';

const responce = {
  startDate: '2022-06-01',
  deadlineDate: '2022-06-21',
  totalPages: 200,
  readedPages: 0,
  results: [
    {
      date: '2022-06-01',
      pointResult: 0,
    },
    {
      date: '2022-06-02',
      pointResult: 0,
    },
    {
      date: '2022-06-03',
      pointResult: 15,
    },
    {
      date: '2022-06-05',
      pointResult: 30,
    },
    {
      date: '2022-06-08',
      pointResult: 30,
    },
  ],
};

const modalText = {
  bookRead: 'Ще одна книга прочитана',
  trainingCompleted: 'Тренування завершено',
  registration: 'Вам на пошту надійшов лист із підтвердженням реєстрації',
};

const TrainingPage = () => {
  return (
    <Section title="Статистика" titleLevel="h2" isHidden>
      <CongratsModal text={modalText.bookRead} />
      <CongratsModal text={modalText.trainingCompleted} />
      <CongratsModal text={modalText.registration} />
      <WellDoneModal />
      <CountdownContainer />
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
