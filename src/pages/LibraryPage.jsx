import Section from 'components/common/section/Section';
import EmtpyLibraryText from 'components/emtpyLibraryText/EmtpyLibraryText';
import LibraryForm from 'components/LibraryForm/LibraryForm';

import FinishedBooks from 'components/LibraryBooks/FinishedBooks';
import InActionBooks from 'components/LibraryBooks/InActionBooks';

import { PageFormatContext, format } from 'context/pageFormatContext';
import { useContext, useEffect, useState } from 'react';
import { getTypeKeys } from 'helpers/libraryService';
import RatingModal from 'components/RatingModal/RatingModal';
import Modal from 'components/Modal/Modal';
import { useDispatch } from 'react-redux';
import { getBooks } from 'redux/books/books-operations';
import { useSelector } from 'react-redux';
import { booksSelectors } from 'redux/books';

const { mobile, response } = format;

const LibraryPage = () => {
  const [showLibraryForm, setShowLibraryForm] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const pageFormat = useContext(PageFormatContext);
  const isMobile = pageFormat === mobile || pageFormat === response;
  const books = useSelector(booksSelectors.getAllBooks);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const hasBookLibrary = false;

  const showMobileForm = showLibraryForm || hasBookLibrary;
  const showSteps = !hasBookLibrary && !showLibraryForm;

  const toggleModal = () => {
    setShowModal(showModal => !showModal);
  };

  return (
    <>
      <Section title={'Моя пуста бібліотека'} titleLevel={'h2'} isHidden>
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
            <LibraryForm />
            {showSteps && (
              <EmtpyLibraryText
                isEmptyLibrary={false}
                onClick={setShowLibraryForm}
              />
            )}
          </>
        )}
        <FinishedBooks options={books.finished} toggleModal={toggleModal} />
        <InActionBooks
          options={books.reading}
          type={getTypeKeys().ReadingBooks}
          title={'Читаю'}
        />
        <InActionBooks
          options={books.unread}
          type={getTypeKeys().UnreadBooks}
          title={'Маю намір прочитати'}
        />
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
