import { useState, useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PageFormatContext, format } from 'context/pageFormatContext';
import { ToastContainer } from 'react-toastify';
import { getUnreadBooks } from 'redux/books/books-operations';
import { trainingSelectors, trainingOperations } from 'redux/training';

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
import { Loader } from 'components/Loader/Loader';
import AddButton from 'components/TrainRadialButton/RadialButton';

import {
  WrapperNotActiveTrain,
  WrapperDesktop,
  ResultsWrapper,
} from './TrainingPage.styled';
import Modal from 'components/Modal/Modal';

const countDays = (startDate = 0, deadlineDate = 0) => {
  const diff = new Date(deadlineDate) - new Date(startDate);
  return Math.round(diff / 1000 / 60 / 60 / 24);
};

const TrainingPage = () => {
  const [isShowTrainingModal, setIsShowTrainingModal] = useState(false);
  const pageFormat = useContext(PageFormatContext);

  const isFirstLoading = useSelector(trainingSelectors.getFirstLoading);
  const loading = useSelector(trainingSelectors.getLoading);
  const isActiveTraining = useSelector(trainingSelectors.getStatus);
  const training = useSelector(trainingSelectors.getTraining);
  const traningResults = useSelector(trainingSelectors.getResult);

  const days = countDays(training.startDate, training.deadlineDate);

  const leftBooks = training.books.filter(
    book => book.status === 'nowReading',
  ).length;

  const dispatch = useDispatch();

  const isMobile =
    pageFormat === format.response || pageFormat === format.mobile;
  const isTabletAndDesktop =
    pageFormat === format.tablet || pageFormat === format.desktop;

  useEffect(() => {
    dispatch(trainingOperations.getActiveTraining());
  }, [dispatch]);

  useEffect(() => {
    if (isFirstLoading || isActiveTraining) return;

    dispatch(getUnreadBooks());
  }, [dispatch, isFirstLoading, isActiveTraining]);

  useEffect(() => {
    if (training.status === 'finished') {
    }
  }, []);

  const modalText = {
    bookRead: 'Ще одна книга прочитана',
    trainingCompleted: 'Тренування завершено',
    registration: 'Вам на пошту надійшов лист із підтвердженням реєстрації',
  };

  const traningResultNormalize = traningResults.filter(
    item => item.pointResult,
  );

  const openTrainingForm = () => {
    setIsShowTrainingModal(prev => !prev);
  };

  switch (true) {
    case isMobile:
      return (
        <Section title="Статистика" titleLevel="h2" isHidden>
          {isFirstLoading && (
            <>
              {!(isActiveTraining === 'active') ? (
                <WrapperNotActiveTrain>
                  {!isShowTrainingModal ? (
                    <>
                      <PlanTimer
                        booksAmout={training.books.length}
                        days={days}
                        booksLeft={leftBooks}
                      />
                      <TrainingList style={{ marginBottom: '32px' }} />
                      <Dashboard responce={training} />
                      <AddButton onBtnClick={openTrainingForm}/>
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
              ) : (
                <>
                  <CountdownContainer
                    isWaiting={loading}
                    deadline={training.deadlineDate}
                  />
                  <PlanTimer
                    booksAmout={training.books.length}
                    days={days}
                    booksLeft={leftBooks}
                  />
                  <TrainForm />
                  <Dashboard responce={training} />
                  <ResultsWrapper>
                    <Results />
                    <Statistic results={traningResultNormalize} />
                  </ResultsWrapper>
                </>
              )}
            </>
          )}
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
          />
          {loading && <Loader />}
          {isShowTrainingModal && (
            <>
              {/* <Modal onClose={openTrainingForm}>
                <WellDoneModal> */}
                  {/* <CongratsModal text={modalText.bookRead} /> */}
                  {/* <CongratsModal text={modalText.trainingCompleted} /> */}
                  {/* <CongratsModal text={modalText.registration} /> */}
                {/* </WellDoneModal>
              </Modal> */}
            </>
          )}
        </Section>
      );

    case isTabletAndDesktop:
      return (
        <Section title="Статистика" titleLevel="h2" isHidden>
          {isFirstLoading && (
            <>
              {!(isActiveTraining === 'active') ? (
                <>
                  <PlanTimer
                    booksAmout={training.books.length}
                    days={days}
                    booksLeft={leftBooks}
                  />
                  <TrainForm />
                  <Dashboard responce={training} />
                </>
              ) : (
                <>
                  <CountdownContainer
                    isWaiting={loading}
                    deadline={training.deadlineDate}
                  />
                  <WrapperDesktop>
                    <PlanTimer
                      booksAmout={training.books.length}
                      days={days}
                      booksLeft={leftBooks}
                    />
                    <TrainForm />
                  </WrapperDesktop>

                  <WrapperDesktop>
                    <Dashboard responce={training} />
                    <ResultsWrapper>
                      <Results />
                      <Statistic results={traningResultNormalize} />
                    </ResultsWrapper>
                  </WrapperDesktop>
                </>
              )}
            </>
          )}
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
          />
          {loading && <Loader />}
          {!isShowTrainingModal && (
            <>
              <Modal onClose={openTrainingForm}>
                <WellDoneModal>
                  {/* <CongratsModal text={modalText.bookRead} /> */}
                  {/* <CongratsModal text={modalText.trainingCompleted} /> */}
                  {/* <CongratsModal text={modalText.registration} /> */}
                </WellDoneModal>
              </Modal>
            </>
          )}
        </Section>
      );

    default:
      return;
  }
};
export default TrainingPage;

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
