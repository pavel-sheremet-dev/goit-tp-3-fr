import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 42px;
  height: 42px;
  background-color: transparent;
  cursor: pointer;
  transform: scale(${({ disabled }) => (disabled ? 0 : 1)});
  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.backgroundColor2};
  }
  transition: transform ${({ theme }) => `${theme.delay}ms`} linear,
    background-color ${({ theme }) => `${theme.delay}ms`} linear;

  & svg {
    /* fill: ${({ theme }) => theme.colors.defaultFontColor}; */
    width: 30px;
    height: 30px;
    /* stroke: ${({ theme }) => theme.colors.defaultFontColor}; */
    color: ${({ theme }) => theme.colors.defaultFontColor};
  }
`;
