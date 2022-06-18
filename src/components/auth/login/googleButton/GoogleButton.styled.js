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

export const StyledRef = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 2.3;
  width: 150px;
  height: 40px;
  color: ${({ theme }) => theme.colors.googleText};
  background-color: ${({ theme }) => theme.colors.iconsHover};
  box-shadow: ${({ theme }) => theme.shadows.btnShadow};
  transition: ${({ theme }) => theme.transition('background-color')},
    ${({ theme }) => theme.transition('box-shadow')};
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.googleBackColor};
    box-shadow: none;
  }
`;

export const ContainerGoogleIcon = styled.div`
  padding-right: 16px;
`;
