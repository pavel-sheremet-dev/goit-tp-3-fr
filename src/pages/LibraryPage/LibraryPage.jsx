import Section from 'components/common/section/Section';
import EmtpyLibraryText from 'components/emtpyLibraryText/EmtpyLibraryText';
import LibraryForm from 'components/LibraryForm/LibraryForm';

import FinishedBooks from 'components/LibraryBooks/FinishedBooks';
import InActionBooks from 'components/LibraryBooks/InActionBooks';
import RadialButton from 'components/LibraryRadialButton';
import LibButton from 'components/LibButton';

import { PageFormatContext, format } from 'context/pageFormatContext';
import { useContext, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { getTypeKeys } from 'helpers/libraryService';
import RatingModal from 'components/RatingModal/RatingModal';
import Modal from 'components/Modal/Modal';

import {
  LibFormLogicPosition,
  LibCollectionLogicPosition,
} from './LibraryPage.styled';

import { getBooks } from 'redux/books/books-operations';
import { booksSelectors } from 'redux/books';

const { mobile, response } = format;

const LibraryPage = () => {
  const [showLibraryForm, setShowLibraryForm] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const pageFormat = useContext(PageFormatContext);
  const dispatch = useDispatch();
  const allBooks = useSelector(booksSelectors.getAllBooks);

  const { unread, reading, finished } = allBooks;

  console.log('allBooks', allBooks);

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const isMobile = pageFormat === mobile || pageFormat === response;

  const hasBookLibrary = !!(unread.length || reading.length || finished.length);

  const showMobileForm = showLibraryForm || hasBookLibrary;

  const showSteps =
    !isMobile || (!hasBookLibrary && !showLibraryForm) || !unread.length;

  // const toggleModal = () => {
  //   setShowModal(showModal => !showModal);
  // };

  const toggleModal = () => {
    setShowModal(showModal => !showModal);
  };

  const onRadialClick = () => {
    console.log('onRadialClick button');
  };

  console.log('hasBookLibrary', hasBookLibrary);
  console.log(
    'isMobile && hasBookLibrary && unread?.length > 2',
    isMobile && hasBookLibrary && unread?.length > 2,
  );

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
          {finished?.length > 0 ? (
            <FinishedBooks options={finished} toggleModal={toggleModal} />
          ) : null}
          {reading?.length > 0 ? (
            <InActionBooks
              options={reading}
              type={getTypeKeys().ReadingBooks}
              title={'Читаю'}
            />
          ) : null}
          {unread?.length > 0 ? (
            <InActionBooks
              options={unread}
              type={getTypeKeys().UnreadBooks}
              title={'Маю намір прочитати'}
            />
          ) : null}
        </LibCollectionLogicPosition>
        {hasBookLibrary && <LibButton />}
        {isMobile && hasBookLibrary && unread?.length > 2 && (
          <RadialButton
            onRadialClick={onRadialClick}
            important={finished?.length}
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
