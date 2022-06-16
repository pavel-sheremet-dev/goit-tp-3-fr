import React from 'react';
import TrainForm from 'components/TrainForm/TrainForm';

import BackButton from 'components/buttons/backButton/BackButton';

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
