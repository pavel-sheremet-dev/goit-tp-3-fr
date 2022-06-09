import LibraryPage from 'pages/LibraryPage';
import TrainingPage from 'pages/TrainingPage';

const Main = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(showModal => !showModal);
  };
  return (
    <main>
      <LibraryPage />
      {showModal && (
        <>
          <Modal onClose={toggleModal}>
    
          </Modal>
        </>
      )}
      
    </main>
  );
};

export default Main;
