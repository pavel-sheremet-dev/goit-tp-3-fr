import { useState, useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { PageFormatContext, format } from 'context/pageFormatContext';
import { ToastContainer } from 'react-toastify';
import { getUnreadBooks } from 'redux/books/books-operations';
import { trainingSelectors, trainingOperations } from 'redux/training';

import Section from 'components/common/section/Section';
import Dashboard from 'components/training/dashboard/Dashboard';
import Results from 'components/training/results/Results';

// import CountdownContainer from 'components/timerCountdown/countdownContainer';
import CongratsModal from 'components/modals/congratsModal';
import WellDoneModal from 'components/modals/wellDoneModal';
import Statistic from 'components/training/statistic/Statistic';
import TrainForm from 'components/training/TrainForm';
import PlanTimer from 'components/training/planTimer';
import TrainingList from 'components/training/trainingList/TrainingList';
import Modal from 'components/modals/modal/Modal';
import TrainFormModal from 'components/training/modalForm/TrainFormModal';
import AddButton from 'components/buttons/trainRadialButton/RadialButton';

import { Loader } from 'components/common/loader/Loader';
import {
  WrapperNotActiveTrain,
  WrapperDesktop,
  ResultsWrapper,
} from './TrainingPage.styled';
import { bookStatusKeys, statusKeys } from 'helpers/config';

import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { CountdownContainer } from 'components/training/timerCountdown';

const language = i18next.use(LanguageDetector);

const modalText = {
  bookRead: {
    en: 'Another book read',
    ua: 'Ще одна книга прочитана',
  },
  trainingCompleted: {
    en: 'Training completed',
    ua: 'Тренування завершено',
  },
};

const countDays = (startDate = 0, deadlineDate = 0) => {
  const diff = new Date(deadlineDate) - new Date(startDate);
  return Math.round(diff / 1000 / 60 / 60 / 24);
};

const TrainingPage = () => {
  const { t } = useTranslation();
  const [isShowTrainingModal, setIsShowTrainingModal] = useState(false);
  const [finishedMoreBook, setFinishedMoreBook] = useState(false);
  const [showCongratsModal, setShowCongratsModal] = useState(false);

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
    if (!isFirstLoading || status === statusKeys().active) return;
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
    setShowCongratsModal(true);
  }, [status]);

  const toggleModal = () => {
    setIsShowTrainingModal(prev => !prev);
  };

  const closeModal = () => {
    setFinishedMoreBook(false);
    setShowCongratsModal(false);
  };

  const traningResultNormalize = traningResults.filter(
    item => item.pointResult,
  );

  const isFailedTraining = status === statusKeys().failed;
  const isReadMoreBook = finishedMoreBook && status === statusKeys().active;
  const issuccessDone =
    status === statusKeys().successDone && showCongratsModal;

  const isMobile =
    pageFormat === format.response || pageFormat === format.mobile;
  const isTabletAndDesktop =
    pageFormat === format.tablet || pageFormat === format.desktop;

  switch (true) {
    case isMobile:
      return (
        <Section title={t('statistics')} titleLevel="h2" isHidden>
          {isFirstLoading && (
            <>
              {!(status === statusKeys().active) ? (
                <WrapperNotActiveTrain>
                  {!isShowTrainingModal ? (
                    <>
                      <PlanTimer
                        booksAmout={training.books.length}
                        days={days}
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
                    text={
                      language.resolvedLanguage === 'uk'
                        ? modalText.bookRead.ua
                        : modalText.bookRead.en
                    }
                    onBtnClick={closeModal}
                  />
                )}
                {issuccessDone && (
                  <CongratsModal
                    text={
                      language.resolvedLanguage === 'uk'
                        ? modalText.trainingCompleted.ua
                        : modalText.trainingCompleted.en
                    }
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
        <Section title={t('statistics')} titleLevel="h2" isHidden>
          {isFirstLoading && (
            <>
              {!(status === statusKeys().active) ? (
                <>
                  <PlanTimer
                    booksAmout={training.books.length}
                    days={days}
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
                    text={
                      language.resolvedLanguage === 'uk'
                        ? modalText.bookRead.ua
                        : modalText.bookRead.en
                    }
                    onBtnClick={closeModal}
                  />
                )}
                {issuccessDone && (
                  <CongratsModal
                    text={
                      language.resolvedLanguage === 'uk'
                        ? modalText.trainingCompleted.ua
                        : modalText.trainingCompleted.en
                    }
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
