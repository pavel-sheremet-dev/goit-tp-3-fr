import styled from 'styled-components';

export const LngSwitcherStyled = styled.div`
  /* @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: 13px;
  } */
`;

export const Button = styled.button`
  text-align: center;
  font-weight: 500;
  font-size: 13px;
  line-height: 1.21;
  cursor: pointer;

  color: ${({ theme }) => theme.colors.lightText};
  background-color: ${({ theme }) => theme.colors.background1};

  transition: ${({ theme }) => theme.transition('color')};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.hover};
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.mainBrandColor};
  }

  &:not(:last-child) {
    /* @media screen and (max-width: 767px) {
      border-bottom: 1px solid ${({ theme }) => theme.colors.lightText};
      border-right: none;
    } */
    border-bottom: none;
    border-right: 1px solid ${({ theme }) => theme.colors.lightText};
  }
`;
