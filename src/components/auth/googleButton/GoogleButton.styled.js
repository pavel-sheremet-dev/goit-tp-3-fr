import styled from 'styled-components';

export const LinkStyled = styled.a`
  width: 150px;
  padding-left: 14px;
  padding-right: 14px;
  height: 40px;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.googleText};
  background-color: ${({ theme }) => theme.colors.iconsHover};
  box-shadow: ${({ theme }) => theme.shadows.google};
  transition: ${({ theme }) => theme.transition('background-color')};
  pointer-events: ${({ isLoading }) => (isLoading ? 'none' : 'visible')};

  &:hover,
  &:focus,
  &:active {
    background-color: ${({ theme }) => theme.colors.background1};
  }

  & svg {
    margin-right: 17px;
  }

  & span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
  }
`;
