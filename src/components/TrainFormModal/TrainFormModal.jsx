import React from 'react';
import TrainForm from 'components/TrainForm/TrainForm';
import IconButton from 'components/common/button/IconButton';
import { ReactComponent as BackBtnIcon } from 'images/svg/back-button.svg';

import { Backdrop } from './TrainFormModal.styled';

const TrainFormModal = ({ isShowTrainingModal, setIsShowTrainingModal }) => {
  return (
    <div>
      {isShowTrainingModal && (
        <Backdrop>
          <IconButton
            IconComponent={BackBtnIcon}
            className={'iconBackBtn'}
            onClick={() => setIsShowTrainingModal(!isShowTrainingModal)}
          />
          <TrainForm />
        </Backdrop>
      )}
    </div>
  );
};

export default TrainFormModal;
