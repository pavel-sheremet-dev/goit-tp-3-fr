import { GlobalStyle } from 'styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { getCssVars } from 'styles/vars';
import Header from 'components/header/Header';
import Layout from 'components/layout/Layout';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';
import Modal from 'components/Modal/Modal';
import RatingModal from 'components/RatingModal/RatingModal';
import { useState } from 'react';
import MainComponent from 'components/main/MainComponent';
import { Loader } from 'components/Loader/Loader';

const App = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const isLoadingUser = useSelector(authSelectors.getLoadingUser);

  useEffect(() => {
    dispatch(authOperations.getUser());
  }, [dispatch]);

  const toggleModal = () => {
    setShowModal(showModal => !showModal);
  };

  return (
    <div>
      <ThemeProvider theme={getCssVars()}>
        <Layout>
          <GlobalStyle />
          {isLoadingUser ? (
            <Loader />
          ) : (
            <>
              <Header />
              <MainComponent />
            </>
          )}
          {/* <Main /> */}
          {showModal && (
            <Modal onClose={toggleModal}>
              <RatingModal onClose={toggleModal} />
            </Modal>
          )}
        </Layout>
      </ThemeProvider>
    </div>
  );
};

export default App;
