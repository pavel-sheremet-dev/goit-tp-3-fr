import Modal from 'components/Modal/Modal';
import RatingModal from 'components/RatingModal/RatingModal';
import LibraryPage from 'pages/LibraryPage';
import TrainingPage from 'pages/TrainingPage';
import RegistrationPage from 'pages/RegistrationPage';
import { useState } from 'react';

const Main = () => {
  const [showModal, setShowModal] = useState(true);
  const toggleModal = () => {
    setShowModal(showModal => !showModal);
  };
  return (
    <main>
       {/* <RegistrationPage />  */}
      <LibraryPage />
      <TrainingPage />
     
      {showModal && (
        <>
          <Modal onClose={toggleModal}>
     <RatingModal onClose={toggleModal}/>
          </Modal>
        </>
      )}
      
    </main>
  );
};

export default Main;
