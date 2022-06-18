import styled from 'styled-components';
export const BoxButton = styled.div`
  margin-top: 28px;
  margin: 0 auto;
  width: 200px;
  height: 60px;
  @media (min-width: 768px) {
    margin-top: 40px;
  } ;
`;

export const Button = styled.button`
  width: 170px;
  height: 60px;
  background-color: #ff6b08;
  background-color: ${({ theme }) => theme.colors.lightBackground};
  border: none;
  outline: 1px solid ${({ theme }) => theme.colors.defaultFont};
  transition: ${({ theme }) => theme.transition('background-color')},
    ${({ theme }) => theme.transition('color')},
    ${({ theme }) => theme.transition('outline-color')};
  cursor: pointer;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.buttonText};
    background-color: ${({ theme }) => theme.colors.mainBrandColor};
    outline: 1px solid ${({ theme }) => theme.colors.mainBrandColor};
    box-shadow: ${({ theme }) => theme.shadows.btnShadow};
  }
`;
