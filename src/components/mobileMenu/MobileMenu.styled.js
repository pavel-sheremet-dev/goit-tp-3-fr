import styled from 'styled-components';

export const StyledMobileMenu = styled.div.attrs(
  ({ theme, isRightHand, isOpen }) => {
    const opacityValue = isOpen ? 0.6 : 0;
    const positionProperty = isRightHand ? 'right: 0;\n' : 'left: 0;\n';
    const border = `border-${isRightHand ? 'left' : 'right'}: 1px solid ${
      theme.colors.defaultFont
    }`;
    const buttonposition = `margin-${isRightHand ? 'left' : 'right'}: auto;\n`;
    const transform = isRightHand ? '' : '-';
    const transformValue = isOpen ? 0 : `${transform}102%`;

    return {
      positionProperty,
      theme,
      transformValue,
      opacityValue,
      border,
      buttonposition,
    };
  },
)`
  position: fixed;
  z-index: 80;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  & .close-btn {
    margin-bottom: 15px;
    text-align: right;
    ${({ buttonposition }) => buttonposition};
  }

  & .box {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 100;
    top: 0;
    ${({ positionProperty }) => positionProperty};
    ${({ border }) => border};

    background-color: ${({ theme }) => theme.colors.background1};
    width: 80%;
    max-width: 250px;
    height: 100%;
    padding: 15px;
    transform: translateX(${({ transformValue }) => transformValue});
    transition: transform ${({ theme }) => `${theme.delay}ms`} linear;
  }

  & .backdrop {
    background-color: #000000;
    opacity: ${({ opacityValue }) => opacityValue};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 90;
    transition: opacity ${({ theme }) => `${theme.delay}ms`} linear;
  }
`;

export const BottomPanel = styled.div`
  margin-top: auto;
`;
