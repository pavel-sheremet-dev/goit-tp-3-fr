import { useState, useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PageFormatContext, format } from 'context/pageFormatContext';
import { ToastContainer } from 'react-toastify';

import Section from 'components/common/section/Section';
import Dashboard from 'components/dashboard/Dashboard';
import Results from 'components/results/Results';
import Countdown from '../components/Countdown';
import CountdownContainer from 'components/CountdownContainer';
import CongratsModal from 'components/CongratsModal';
import WellDoneModal from 'components/WellDoneModal';
import Statistic from 'components/statistic/Statistic';
import TrainForm from 'components/TrainForm/TrainForm';
import PlanTimer from 'components/PlanTimer';
import TrainingList from 'components/TrainingList/TrainingList';
import IconButton from 'components/common/button/IconButton';
import { ReactComponent as PlusBtnIcon } from 'images/svg/icon-plus.svg';
import TrainFormModal from 'components/TrainFormModal/TrainFormModal';

import { trainingSelectors } from 'redux/training';
import { getUnreadBooks } from 'redux/books/books-operations';
import { WrapperNotActiveTrain, WrapperDesktop } from './TrainingPage.styled';

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
  const [results, setResult] = useState([]);
  const pageFormat = useContext(PageFormatContext);

  const isStatusTraining = useSelector(trainingSelectors.getStatus);
  const [isShowTrainingModal, setIsShowTrainingModal] = useState(false);
  console.log('isStatusTraining:', isStatusTraining);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUnreadBooks());
  }, [dispatch]);

  const modalText = {
    bookRead: 'Ще одна книга прочитана',
    trainingCompleted: 'Тренування завершено',
    registration: 'Вам на пошту надійшов лист із підтвердженням реєстрації',
  };

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

  const openTrainingForm = () => {
    setIsShowTrainingModal(!isShowTrainingModal);
  };

  const isResponse = pageFormat === format.response;
  const isMobile = pageFormat === format.mobile;
  const isTablet = pageFormat === format.tablet;
  const isDesktop = pageFormat === format.desktop;

  return (
    <Section title="Статистика" titleLevel="h2" isHidden>
      {/* <CongratsModal text={modalText.bookRead} />
      <CongratsModal text={modalText.trainingCompleted} />
      <CongratsModal text={modalText.registration} />
    <WellDoneModal /> */}

      {(isResponse || isMobile) && (
        <>
          {isStatusTraining ? (
            <>
              <CountdownContainer />
              <PlanTimer />
              <TrainForm />
              <Dashboard responce={responce} />
              <Results
                startDate={startDay}
                finishDate={responce.deadlineDate}
                onSubmit={obj => setResult([...results, obj])}
              />
              <Statistic results={responce.results} />
            </>
          ) : (
            <WrapperNotActiveTrain>
              {!isShowTrainingModal ? (
                <>
                  <PlanTimer />
                  <TrainingList />
                  <Dashboard responce={responce} />
                  <IconButton
                    IconComponent={PlusBtnIcon}
                    className={'iconPlus'}
                    onClick={openTrainingForm}
                  />
                </>
              ) : (
                <>
                  <TrainFormModal
                    isShowTrainingModal={isShowTrainingModal}
                    setIsShowTrainingModal={setIsShowTrainingModal}
                  >
                    <TrainForm />
                  </TrainFormModal>
                </>
              )}
            </WrapperNotActiveTrain>
          )}
        </>
      )}

      {(isTablet || isDesktop) && (
        <>
          {isStatusTraining ? (
            <>
              <CountdownContainer />
              <WrapperDesktop>
                <PlanTimer />
                <TrainForm />
              </WrapperDesktop>

              <WrapperDesktop>
                <Dashboard responce={responce} />
                <div>
                  <Results
                    startDate={startDay}
                    finishDate={responce.deadlineDate}
                    onSubmit={obj => setResult([...results, obj])}
                  />
                  <Statistic results={responce.results} />
                </div>
              </WrapperDesktop>
            </>
          ) : (
            <>
              <PlanTimer />
              <TrainForm />

              <Dashboard responce={responce} />
            </>
          )}
        </>
      )}

      {/* <CountdownContainer /> */}
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
