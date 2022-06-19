import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  position: relative;
  width: 280px;
  height: 42px;
  margin-bottom: 5px;

  & #dropdown {
    appearance: none;
    padding: 5px;
    color: ${({ theme }) => theme.colors.background1};
    border: none;
    font-family: inherit;
    outline: none;
  }

  & select {
    appearance: none;
    width: 100%;
    height: 42px;
    padding: 10px 40px 10px 12px;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.21;
    color: ${({ theme }) => theme.colors.placeholder};
    outline: none;
    border: none;
    background-color: ${({ theme }) => theme.colors.background1};
    box-shadow: inset 0px 1px 2px rgba(29, 29, 27, 0.15);
    cursor: pointer;

    &::-ms-expand {
      display: none;
    }
  }

  & svg {
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    width: 483px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    width: 715px;
  }
`;
