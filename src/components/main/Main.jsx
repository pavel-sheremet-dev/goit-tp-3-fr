import Modal from 'components/Modal/Modal';
import RatingModal from 'components/RatingModal/RatingModal';
import { useState } from 'react';

const Main = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(showModal => !showModal);
  };

  return (
    <main>
      {showModal && (
        <Modal onClose={toggleModal}>
          <RatingModal onClose={toggleModal} />
        </Modal>
      )}
    </main>
  );
};

export default Main;
