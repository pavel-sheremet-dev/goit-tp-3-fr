import styled from 'styled-components';

export const WellDoneModalStyled = styled.div`
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
  min-width: 152px;
  min-height: 40px;
  padding: 5px;
  font-weight: 500;
  margin-top: 24px;
  cursor: pointer;

  font-size: 14px;
  line-height: 1.21;

  box-shadow: ${({ theme }) => theme.shadows.btnShadow};
  transition: ${({ theme }) => theme.transition('background-color')},
    ${({ theme }) => theme.transition('color')};

  color: ${({ theme }) => theme.colors.buttonText};
  background: ${({ theme }) => theme.colors.mainBrandColor};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.buttonText};
    background-color: ${({ theme }) => theme.colors.hover};
  }
`;
