import styled from 'styled-components';

export const CongratsModalStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  background-color: ${({ theme }) => theme.colors.background1};

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

export const Button = styled.button`
  min-width: 130px;
  min-height: 40px;
  padding: 5px;
  margin-top: 24px;
  font-weight: 500;
  cursor: pointer;

  font-size: 14px;
  line-height: 1.21;
  color: ${({ theme }) => theme.colors.buttonText};

  transition: ${({ theme }) => theme.transition('background-color')};

  background: ${({ theme }) => theme.colors.mainBrandColor};
  box-shadow: ${({ theme }) => theme.shadows.btnShadow};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.hover};
  }
`;
