import styled from 'styled-components';
import { StyledContainer } from 'components/common/container/Container.styled';

export const Section = styled(StyledContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  outline: -1px transparent;
  background-color: ${({ theme }) => theme.colors.white};

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    flex-direction: row;
  }
`;
