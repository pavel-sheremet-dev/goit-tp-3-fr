import styled from 'styled-components';

export const WellDoneModalStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  background-color: ${({ theme }) => theme.colors.white};

  @media screen and (max-width: 767px) {
    width: 280px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    width: 394px;
  }
`;

export const Text = styled.p`
  text-align: center;
  font-size: 16px;
  line-height: 1.38;
  margin-top: 20px;
`;

export const Buttons = styled.div`
  margin-top: 24px;
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ButtonWhite = styled.button`
  min-width: 152px;
  min-height: 40px;
  padding: 5px;
  font-weight: 500;
  cursor: pointer;

  font-size: 14px;
  line-height: 1.21;

  border: 1px solid #000000;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.btnShadow};
  transition: ${({ theme }) => theme.transition('background-color')},
    ${({ theme }) => theme.transition('color')},
    ${({ theme }) => theme.transition('border')};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.hover};
    border: none;
  }
`;

export const ButtonOrange = styled(ButtonWhite)`
  border: none;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.mainBrandColor};

  @media screen and (max-width: 767px) {
    margin-bottom: 20px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    margin-right: 32px;
  }
`;
