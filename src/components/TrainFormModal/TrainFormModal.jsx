import React from 'react';
import TrainForm from 'components/TrainForm/TrainForm';

import BackButton from 'pages/LibraryPage/BackButton';

const TrainFormModal = ({ isShowTrainingModal, setIsShowTrainingModal }) => {
  return (
    <div>
      {isShowTrainingModal && (
        <>
          <BackButton
            onBtnClick={() => setIsShowTrainingModal(!isShowTrainingModal)}
          />
          <TrainForm />
        </>
      )}
    </div>
  );
};

export default TrainFormModal;
