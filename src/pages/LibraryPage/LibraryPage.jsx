import { PageFormatContext, format } from 'context/pageFormatContext';
import { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from 'redux/books/books-operations';

import { getTypeKeys } from 'helpers/libraryService';

import Section from 'components/common/section/Section';
import EmtpyLibraryText from 'components/emtpyLibraryText/EmtpyLibraryText';
import LibraryForm from 'components/LibraryForm/LibraryForm';
import FinishedBooks from 'components/LibraryBooks/FinishedBooks';
import InActionBooks from 'components/LibraryBooks/InActionBooks';
import LibButton from 'components/buttons/LibButton';
import BackButton from '../../components/buttons/backButton/BackButton';
import RatingModal from 'components/modals/RatingModal/RatingModal';
import Modal from 'components/modals/Modal/Modal';

import { LibCollectionLogicPosition } from './LibraryPage.styled';
import { Loader } from 'components/common/Loader/Loader';
import { booksSelectors } from 'redux/books';
import { AddButton } from 'components/buttons/LibraryRadialButton/RadialButton';

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
                          <InActionBooks
                            options={unread}
                            type={getTypeKeys().UnreadBooks}
                            title={t('goingToRead')}
                          />
                        )}
                        {!!reading.length && (
                          <InActionBooks
                            options={reading}
                            type={getTypeKeys().ReadingBooks}
                            title={t('read')}
                          />
                        )}
                        {!!finished.length && (
                          <FinishedBooks getId={getId} options={finished} />
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
                      <InActionBooks
                        options={unread}
                        type={getTypeKeys().UnreadBooks}
                        title={t('goingToRead')}
                      />
                    )}
                    {!!reading.length && (
                      <InActionBooks
                        options={reading}
                        type={getTypeKeys().ReadingBooks}
                        title={t('read')}
                      />
                    )}
                    {!!finished.length && (
                      <FinishedBooks getId={getId} options={finished} />
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
