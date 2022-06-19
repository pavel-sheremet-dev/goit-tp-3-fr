import styled from 'styled-components';

export const Button = styled.button`
  width: 33px;
  height: 33px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  background-color: ${({ theme }) => theme.colors.background1};
  cursor: pointer;

  & svg {
    width: 20px;
    height: 20px;
    fill: ${({ theme }) => theme.colors.placeholder};
    transition: ${({ theme }) => theme.transition('fill')};
    margin: 0;
  }
  &:hover svg,
  &:focus svg,
  &:active svg {
    fill: ${({ theme }) => theme.colors.mainBrandColor};
    outline: none;
  }
`;
