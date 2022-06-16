import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 32px;
  padding-bottom: 28px;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    padding-top: 40px;
    padding-bottom: 29px;
  }
`;

export const StyledGoogleButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 14px;
  padding-right: 50px;
  padding-top: 11px;
  padding-bottom: 11px;
  width: 150px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.iconsHover};
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadows.btnGoogle};
`;

export const StyledRef = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 16px;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 38px;
  color: ${({ theme }) => theme.colors.googleText};
`;

export const ContainerGoogleIcon = styled.div`
  padding-right: 16px;
`;
