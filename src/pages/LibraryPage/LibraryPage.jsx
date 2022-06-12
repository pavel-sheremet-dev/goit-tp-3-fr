import Section from 'components/common/section/Section';
import EmtpyLibraryText from 'components/emtpyLibraryText/EmtpyLibraryText';
import LibraryForm from 'components/LibraryForm/LibraryForm';

import FinishedBooks from 'components/LibraryBooks/FinishedBooks';
import InActionBooks from 'components/LibraryBooks/InActionBooks';
import RadialButton from 'components/LibraryRadialButton';
import LibButton from 'components/LibButton';

import { PageFormatContext, format } from 'context/pageFormatContext';
import { useContext, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { getTypeKeys } from 'helpers/libraryService';
import RatingModal from 'components/RatingModal/RatingModal';
import Modal from 'components/Modal/Modal';

import {
  LibFormLogicPosition,
  LibCollectionLogicPosition,
} from './LibraryPage.styled';

import data from 'data/data1.json';

const { mobile, response } = format;

const LibraryPage = () => {
  const [showLibraryForm, setShowLibraryForm] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const pageFormat = useContext(PageFormatContext);
  const dispatch = useDispatch();

  const finishedBooksCollection = [
    ...data.library.finished,
    ...data.library.finished,
    ...data.library.finished,
    ...data.library.finished,
    ...data.library.finished,
    ...data.library.finished,
  ]; /* const finishedBooksCollection = useSelector(Selector.getFinishedCollection); */
  const readingBooksCollection = [
    ...data.library.finished,
    ...data.library.finished,
  ]; /* const readingBooksCollection = useSelector(Selector.getReadingCollection); */
  const unreadBooksCollection = [
    ...data.library.finished,
    ...data.library.finished,
    ...data.library.finished,
  ]; /* const unreadBooksCollection = useSelector(Selector.getUnreadCollection); */

  const isMobile = pageFormat === mobile || pageFormat === response;
  const hasBookLibrary = unreadBooksCollection?.length > 0;
  const showMobileForm = showLibraryForm || hasBookLibrary;
  const showSteps = !hasBookLibrary && !showLibraryForm;

  // const toggleModal = () => {
  //   setShowModal(showModal => !showModal);
  // };

  const toggleModal = () => {
    setShowModal(showModal => !showModal);
  };

  const onRadialClick = () => {
    console.log('onRadialClick button');
  };

  return (
    <>
      <Section title={'Моя пуста бібліотека'} titleLevel={'h2'} isHidden>
        <LibFormLogicPosition>
          {isMobile && (
            <>
              {showMobileForm && <LibraryForm />}
              {showSteps && (
                <EmtpyLibraryText
                  isEmptyLibrary={false}
                  onClick={setShowLibraryForm}
                />
              )}
            </>
          )}
          {!isMobile && (
            <>
              <LibraryForm isArrayFull={hasBookLibrary} />
              {showSteps && (
                <EmtpyLibraryText
                  isEmptyLibrary={false}
                  onClick={setShowLibraryForm}
                />
              )}
            </>
          )}
        </LibFormLogicPosition>
        <LibCollectionLogicPosition>
          {finishedBooksCollection?.length > 0 ? (
            <FinishedBooks
              options={finishedBooksCollection}
              toggleModal={toggleModal}
            />
          ) : null}
          {readingBooksCollection?.length > 0 ? (
            <InActionBooks
              options={readingBooksCollection}
              type={getTypeKeys().ReadingBooks}
              title={'Читаю'}
            />
          ) : null}
          {unreadBooksCollection?.length > 0 ? (
            <InActionBooks
              options={unreadBooksCollection}
              type={getTypeKeys().UnreadBooks}
              title={'Маю намір прочитати'}
            />
          ) : null}
        </LibCollectionLogicPosition>
        {hasBookLibrary && <LibButton />}
        {isMobile && hasBookLibrary && unreadBooksCollection?.length > 2 && (
          <RadialButton
            onRadialClick={onRadialClick}
            important={finishedBooksCollection?.length}
          />
        )}
        {/* The radial button does activate, if Array.length > 2 it is normal for UX */}
        {showModal && (
          <>
            <Modal onClose={toggleModal}>
              <RatingModal onClose={toggleModal} />
            </Modal>
          </>
        )}
      </Section>
    </>
  );
};

// При отсутвии библиотеки рендерить модальное окно с шагами, по сути это не модальное окно
// а обычный компонент внутри страницы. Мы его условно называем модальным окном, по макету это не так.

// Т.е. при рендериге Страницы мы делаем запрос на бек - если он не возвращает библиотеку, то показываем
// модалку

// Если есть Библиотека - рендерим её (по категориям в зависимости от статуса книги)
// Кнопка + открывает форму добавления книги
// кнопку "моє тренування" дисейблим или вообще не показываем, если нет ниодной книги.
// 3.1 и 3.2 обьединяем

export default LibraryPage;
