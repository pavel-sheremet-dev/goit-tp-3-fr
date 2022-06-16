import { useState, useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRef } from 'react';
import { PageFormatContext, format } from 'context/pageFormatContext';
import { ToastContainer } from 'react-toastify';
import { getUnreadBooks } from 'redux/books/books-operations';
import { trainingSelectors, trainingOperations } from 'redux/training';

import Section from 'components/common/section/Section';
import Dashboard from 'components/dashboard/Dashboard';
import Results from 'components/results/Results';

import CountdownContainer from 'components/CountdownContainer';
import CongratsModal from 'components/modals/CongratsModal';
import WellDoneModal from 'components/modals/WellDoneModal';
import Statistic from 'components/statistic/Statistic';
import TrainForm from 'components/TrainForm/TrainForm';
import PlanTimer from 'components/PlanTimer';
import TrainingList from 'components/TrainingList/TrainingList';
import Modal from 'components/modals/Modal/Modal';
import TrainFormModal from 'components/TrainFormModal/TrainFormModal';
import AddButton from 'components/buttons/TrainRadialButton/RadialButton';

import { Loader } from 'components/common/Loader/Loader';
import {
  WrapperNotActiveTrain,
  WrapperDesktop,
  ResultsWrapper,
} from './TrainingPage.styled';
import { bookStatusKeys, statusKeys } from 'helpers/config';

const modalText = {
  bookRead: 'Ще одна книга прочитана',
  trainingCompleted: 'Тренування завершено',
  registration: 'Вам на пошту надійшов лист із підтвердженням реєстрації',
};

const countDays = (startDate = 0, deadlineDate = 0) => {
  const diff = new Date(deadlineDate) - new Date(startDate);
  return Math.round(diff / 1000 / 60 / 60 / 24);
};

const TrainingPage = () => {
  const [isShowTrainingModal, setIsShowTrainingModal] = useState(false);
  const [finishedMoreBook, setFinishedMoreBook] = useState(false);

  const loading = useSelector(trainingSelectors.getLoading);
  const isFirstLoading = useSelector(trainingSelectors.getFirstLoading);

  const status = useSelector(trainingSelectors.getStatus);
  const training = useSelector(trainingSelectors.getTraining);

  const traningResults = useSelector(trainingSelectors.getResult);
  const pageFormat = useContext(PageFormatContext);
  const days = countDays(training.startDate, training.deadlineDate);

  const left = useRef(null);
  const isFirst = useRef(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(trainingOperations.getActiveTraining());
  }, [dispatch]);

  useEffect(() => {
    if (!isFirstLoading || status) return;
    dispatch(getUnreadBooks());
  }, [dispatch, isFirstLoading, status]);

  const leftBooks = training.books.filter(
    book => book.status === bookStatusKeys().nowReading,
  ).length;

  useEffect(() => {
    if (isFirst.current && status === statusKeys().active) {
      isFirst.current = false;
      const leftBooks = training.books.filter(
        book => book.status === bookStatusKeys().nowReading,
      ).length;
      left.current = leftBooks;
    }
  }, [status, isFirstLoading, training.books]);

  useEffect(() => {
    if (!isFirstLoading) return;
    if (left.current <= leftBooks) return;
    left.current = leftBooks;
    setFinishedMoreBook(true);
  }, [finishedMoreBook, isFirstLoading, leftBooks, training.books]);

  useEffect(() => {
    if (status === statusKeys().active) return;
    setIsShowTrainingModal(true);
  }, [status]);

  const toggleModal = () => {
    setIsShowTrainingModal(prev => !prev);
  };

  const closeModal = () => {
    setFinishedMoreBook(false);
    setIsShowTrainingModal(false);
  };

  const traningResultNormalize = traningResults.filter(
    item => item.pointResult,
  );

  const isFailedTraining = status === statusKeys().failed;
  const isReadMoreBook = finishedMoreBook && status === statusKeys().active;
  const issuccessDone =
    status === statusKeys().successDone && isShowTrainingModal;

  const isMobile =
    pageFormat === format.response || pageFormat === format.mobile;
  const isTabletAndDesktop =
    pageFormat === format.tablet || pageFormat === format.desktop;

  switch (true) {
    case isMobile:
      return (
        <Section title="Статистика" titleLevel="h2" isHidden>
          {isFirstLoading && (
            <>
              {!(status === statusKeys().active) ? (
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
                      <AddButton onBtnClick={toggleModal} />
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

          {(isFailedTraining || isReadMoreBook || issuccessDone) && (
            <>
              <Modal onClose={closeModal}>
                {isFailedTraining && <WellDoneModal onBtnClick={closeModal} />}
                {isReadMoreBook && (
                  <CongratsModal
                    text={modalText.bookRead}
                    onBtnClick={closeModal}
                  />
                )}
                {issuccessDone && (
                  <CongratsModal
                    text={modalText.trainingCompleted}
                    onBtnClick={closeModal}
                  />
                )}
              </Modal>
            </>
          )}
        </Section>
      );

    case isTabletAndDesktop:
      return (
        <Section title="Статистика" titleLevel="h2" isHidden>
          {isFirstLoading && (
            <>
              {!(status === statusKeys().active) ? (
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

          {(isFailedTraining || isReadMoreBook || issuccessDone) && (
            <>
              <Modal onClose={closeModal}>
                {isFailedTraining && <WellDoneModal onBtnClick={closeModal} />}
                {isReadMoreBook && (
                  <CongratsModal
                    text={modalText.bookRead}
                    onBtnClick={closeModal}
                  />
                )}
                {issuccessDone && (
                  <CongratsModal
                    text={modalText.trainingCompleted}
                    onBtnClick={closeModal}
                  />
                )}
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
