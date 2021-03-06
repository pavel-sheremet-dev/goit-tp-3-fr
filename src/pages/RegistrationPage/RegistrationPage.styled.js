import styled from 'styled-components';
import { StyledContainer } from 'components/common/container/Container.styled';

export const LoginSection = styled.section`
  background-color: ${({ theme }) => theme.colors.background1};
`;

export const Section = styled(StyledContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 100%;
  outline: -1px transparent;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    display: grid;
    grid-template-columns: 43% 57%;
  }
`;
