import styled from 'styled-components';

export const ExitModalStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px 21px;
  background-color: ${({ theme }) => theme.colors.background1};

  @media screen and (max-width: 767px) {
    width: 280px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    width: 394px;
    padding: 48px 52px;
  }
`;

export const Text = styled.p`
  text-align: center;
  font-size: 16px;
  line-height: 1.38;
`;

export const ButtonsDiv = styled.div`
  margin-top: 20px;
  @media screen and (max-width: 767px) {
    display: flex;
  }
`;

export const ButtonWhite = styled.button.attrs(props => ({
  type: 'button',
}))`
  min-width: 97px;
  min-height: 40px;
  padding: 5px;
  font-weight: 500;
  cursor: pointer;
  font-size: 14px;
  line-height: 1.21;
  border: 1px solid #000000;
  background: ${({ theme }) => theme.colors.buttonText};
  box-shadow: ${({ theme }) => theme.shadows.btnShadow};
  transition: ${({ theme }) => theme.transition('background-color')},
    ${({ theme }) => theme.transition('color')},
    ${({ theme }) => theme.transition('border')};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.buttonText};
    background-color: ${({ theme }) => theme.colors.hover};
    border: none;
  }
`;

export const ButtonOrange = styled(ButtonWhite)`
  border: none;
  margin-left: 16px;
  color: ${({ theme }) => theme.colors.buttonText};
  background: ${({ theme }) => theme.colors.mainBrandColor};

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    margin-left: 30px;
  }
`;
