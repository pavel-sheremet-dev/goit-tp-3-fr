import Modal from 'components/Modal/Modal';
import RatingModal from 'components/RatingModal/RatingModal';
import LibraryPage from 'pages/LibraryPage';
import TrainingPage from 'pages/TrainingPage';
import StartTrenny from '../buttonStartTrenny/ButtonStartTrenny';
import { useState } from 'react';

const Main = () => {
  const [showModal, setShowModal] = useState(true);
  const toggleModal = () => {
    setShowModal(showModal => !showModal);
  };
  return (
    <main>
      {/* <LibraryPage /> */}
      {/* <TrainingPage /> */}
      <StartTrenny />
      <LibraryPage />
      {showModal && (
        <>
          <Modal onClose={toggleModal}>
            <RatingModal onClose={toggleModal} />
          </Modal>
        </>
      )}
    </main>
  );
};

export default Main;
