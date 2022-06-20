import { PageFormatContext, format } from 'context/pageFormatContext';
import { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from 'redux/books/books-operations';

import { getTypeKeys } from 'helpers/libraryService';

import Section from 'components/common/section/Section';
import EmtpyLibraryText from 'components/library/emtpyLibraryText/EmtpyLibraryText';
import LibraryForm from 'components/library/libraryForm/LibraryForm';
import BooksTemplate from 'components/library/libraryBooks';

import LibButton from 'components/buttons/libButton';
import BackButton from 'components/buttons/backButton/BackButton';
import RatingModal from 'components/modals/ratingModal/RatingModal';
import Modal from 'components/modals/modal/Modal';
import { LibCollectionLogicPosition } from './LibraryPage.styled';
import { Loader } from 'components/common/loader/Loader';
import { booksSelectors } from 'redux/books';
import { AddButton } from 'components/buttons/libraryRadialButton/RadialButton';

const { mobile, response } = format;

const LibraryPage = () => {
  const { t } = useTranslation();
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
        <Section title={t('myLibrary')} titleLevel={'h2'} isHidden>
          {isFirstLoaded ? (
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
                        {!!unread.length && (
                          <BooksTemplate
                            options={unread}
                            type={getTypeKeys().UnreadBooks}
                            title={t('goingToRead')}
                          />
                        )}
                        {!!reading.length && (
                          <BooksTemplate
                            options={reading}
                            type={getTypeKeys().ReadingBooks}
                            title={t('read')}
                          />
                        )}
                        {!!finished.length && (
                          <BooksTemplate
                            getId={getId}
                            options={finished}
                            type={getTypeKeys().FinishedBooks}
                            title={t('alreadyRead')}
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
        <Section title={t('myLibrary')} titleLevel={'h2'} isHidden>
          {isFirstLoaded ? (
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
                    {!!unread.length && (
                      <BooksTemplate
                        options={unread}
                        type={getTypeKeys().UnreadBooks}
                        title={t('goingToRead')}
                      />
                    )}
                    {!!reading.length && (
                      <BooksTemplate
                        options={reading}
                        type={getTypeKeys().ReadingBooks}
                        title={t('read')}
                      />
                    )}
                    {!!finished.length && (
                      <BooksTemplate
                        getId={getId}
                        options={finished}
                        type={getTypeKeys().FinishedBooks}
                        title={t('alreadyRead')}
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

export default LibraryPage;
