import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  padding: 7px;
  width: 33px;
  height: 33px;
  border-radius: 50%;
  background-color: transparent;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.iconsHover};
  }
  transition: background-color ${({ theme }) => `${theme.delay}ms`} linear;

  & svg {
    fill: ${({ theme }) => theme.colors.placeholder};
    /* width: 30px;
    height: 30px; */
  }
`;
