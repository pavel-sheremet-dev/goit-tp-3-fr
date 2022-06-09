import Modal from 'components/Modal/Modal';
import LibraryPage from 'pages/LibraryPage';
import TrainingPage from 'pages/TrainingPage';
import { useState } from 'react';

const Main = () => {
  const [showModal, setShowModal] = useState(true);
  const toggleModal = () => {
    setShowModal(showModal => !showModal);
  };
  return (
    <main>
      <LibraryPage />
      {showModal && (
        <>
          <Modal onClose={toggleModal}>
    <p>dfgdf</p>
          </Modal>
        </>
      )}
      
    </main>
  );
};

export default Main;
