import { PageFormatContext, format } from 'context/pageFormatContext';
import { useContext, useEffect, useRef, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from 'redux/books/books-operations';

import { getTypeKeys } from 'helpers/libraryService';

import Section from 'components/common/section/Section';
import EmtpyLibraryText from 'components/emtpyLibraryText/EmtpyLibraryText';
import LibraryForm from 'components/LibraryForm/LibraryForm';
import FinishedBooks from 'components/LibraryBooks/FinishedBooks';
import InActionBooks from 'components/LibraryBooks/InActionBooks';
import LibButton from 'components/LibButton';
import BackButton from './BackButton';
import RatingModal from 'components/RatingModal/RatingModal';
import Modal from 'components/Modal/Modal';

import { LibCollectionLogicPosition } from './LibraryPage.styled';
import { Loader } from 'components/Loader/Loader';
import { booksSelectors } from 'redux/books';
import { AddButton } from 'components/LibraryRadialButton/RadialButton';

const { mobile, response } = format;

const LibraryPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [index, setIndex] = useState('');
  const pageFormat = useContext(PageFormatContext);
  const dispatch = useDispatch();
  const allBooks = useSelector(booksSelectors.getAllBooks);
  const loading = useSelector(booksSelectors.getLoading);
  const isFirstLoaded = useSelector(booksSelectors.getIsFirstLoaded);

  const { unread, reading, finished } = allBooks;

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const isMobile = pageFormat === mobile || pageFormat === response;

  const hasBookLibrary = !!(unread.length || reading.length || finished.length);

  const [showLibraryForm, setShowLibraryForm] = useState(false);

  const getId = id => {
    setIndex(id);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  switch (true) {
    case isMobile:
      return (
        <Section title={'Моя бібліотека'} titleLevel={'h2'} isHidden>
          {!isFirstLoaded ? (
            <>
              {!hasBookLibrary ? (
                <div>
                  {showLibraryForm && (
                    <>
                      <BackButton onBtnClick={setShowLibraryForm} />
                      <LibraryForm closeForm={setShowLibraryForm} />
                    </>
                  )}
                  {!showLibraryForm && (
                    <EmtpyLibraryText
                      isEmptyLibrary={false}
                      onClick={setShowLibraryForm}
                    />
                  )}
                </div>
              ) : (
                <>
                  {showLibraryForm && (
                    <>
                      <BackButton onBtnClick={setShowLibraryForm} />
                      <LibraryForm closeForm={setShowLibraryForm} />
                    </>
                  )}
                  {!showLibraryForm && (
                    <>
                      <LibCollectionLogicPosition>
                        {!!finished.length && (
                          <FinishedBooks getId={getId} options={finished} />
                        )}
                        {!!reading.length && (
                          <InActionBooks
                            options={reading}
                            type={getTypeKeys().ReadingBooks}
                            title={'Читаю'}
                          />
                        )}
                        {!!unread.length && (
                          <InActionBooks
                            options={unread}
                            type={getTypeKeys().UnreadBooks}
                            title={'Маю намір прочитати'}
                          />
                        )}
                      </LibCollectionLogicPosition>
                      {!!unread.length && <LibButton />}
                      <AddButton onBtnClick={setShowLibraryForm} />
                    </>
                  )}
                </>
              )}
            </>
          ) : (
            <Loader />
          )}
          {showModal && (
            <Modal onClose={closeModal}>
              <RatingModal onClose={closeModal} index={index} />
            </Modal>
          )}
          {loading && <Loader />}
        </Section>
      );
    case !isMobile:
      return (
        <Section title={'Моя бібліотека'} titleLevel={'h2'} isHidden>
          {!isFirstLoaded ? (
            <>
              <LibraryForm closeForm={setShowLibraryForm} />
              {!hasBookLibrary && (
                <EmtpyLibraryText
                  isEmptyLibrary={false}
                  onClick={setShowLibraryForm}
                />
              )}
              {hasBookLibrary && (
                <>
                  <LibCollectionLogicPosition>
                    {!!finished.length && (
                      <FinishedBooks getId={getId} options={finished} />
                    )}
                    {!!reading.length && (
                      <InActionBooks
                        options={reading}
                        type={getTypeKeys().ReadingBooks}
                        title={'Читаю'}
                      />
                    )}
                    {!!unread.length && (
                      <InActionBooks
                        options={unread}
                        type={getTypeKeys().UnreadBooks}
                        title={'Маю намір прочитати'}
                      />
                    )}
                  </LibCollectionLogicPosition>
                  {!!unread.length && <LibButton />}
                </>
              )}
            </>
          ) : (
            <Loader />
          )}
          {showModal && (
            <Modal onClose={closeModal}>
              <RatingModal onClose={closeModal} index={index} />
            </Modal>
          )}
          {loading && <Loader />}
        </Section>
      );
    default:
      return;
  }
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
