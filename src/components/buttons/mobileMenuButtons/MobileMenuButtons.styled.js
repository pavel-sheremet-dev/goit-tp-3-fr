import styled from 'styled-components';
import { StyledButton } from '../button/IconButton.styled';

export const ButtonStyled = styled(StyledButton)`
  transform: scale(${({ disabled }) => (disabled ? 0 : 1)});
  transition: ${({ theme }) => theme.transition('transform')},
    ${({ theme }) => theme.transition('background-color')};

  margin: 0;
`;
