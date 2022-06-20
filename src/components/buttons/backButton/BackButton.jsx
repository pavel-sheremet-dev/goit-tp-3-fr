import { ReactComponent as BackIcon } from 'assets/images/svg/back-button.svg';

import styled from 'styled-components';

const BackButton = ({ onBtnClick }) => {
  return (
    <BtnStyled type="button" onClick={() => onBtnClick(false)}>
      <BackIcon />
    </BtnStyled>
  );
};

export default BackButton;

export const BtnStyled = styled.button`
  display: flex;
  align-items: center;
  padding: 10px 20px 10px 0px;
  margin-bottom: 15px;
  background-color: transparent;
  cursor: pointer;
`;
