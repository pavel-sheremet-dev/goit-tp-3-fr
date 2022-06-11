import Modal from 'components/Modal/Modal';
import RatingModal from 'components/RatingModal/RatingModal';
import { useState } from 'react';
import LibraryPage from 'pages/LibraryPage';
import TrainingPage from 'pages/TrainingPage';
import StartTrenny from '../buttonStartTrenny/ButtonStartTrenny';

const Main = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(showModal => !showModal);
  };

  return (
    <main>
      <TrainingPage />
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
