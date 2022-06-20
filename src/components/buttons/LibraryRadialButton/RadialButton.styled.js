import { ReactComponent as AddButton } from 'assets/images/svg/lib-rad-button.svg';
import styled from 'styled-components';

export const LibAddButton = styled(AddButton)`
  position: fixed;
  bottom: 40px;
  left: 50%;
  transform: translate(-50%);
  cursor: pointer;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
  }
`;

export const Button = styled.button`
  background: none;
  border: none;
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
  }
`;
