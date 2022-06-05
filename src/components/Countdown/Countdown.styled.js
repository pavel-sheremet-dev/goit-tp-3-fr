import styled from 'styled-components';
import { getCssVars } from 'styles/vars';

const { lightText, numbers } = getCssVars().colors;

export const StyledTimer = styled.div`
  @media screen and (max-width: 767px) {
    &:not(:last-child) {
      margin-bottom: 24px;
    }
    width: 280px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    margin-right: 32px;
    width: 290px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    margin-right: 74px;
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.21;
  margin-bottom: 9px;
  color: ${lightText};
`;

export const TimeList = styled.div`
  display: flex;
  justify-content: center;
  padding: 1px 0 8px 0;
  box-shadow: 4px 4px 8px rgba(36, 42, 55, 0.15);
`;

export const TimeItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Number = styled.span`
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  font-size: 25px;
  line-height: 1.52;
  margin-bottom: 1px;
  color: ${numbers};
`;

export const Word = styled.span`
  font-weight: 500;
  font-size: 10px;
  line-height: 1.2;
  color: ${lightText};
`;

export const Dots = styled(Number)`
  font-family: 'Open Sans', serif;
  margin: 0 10px 0;
`;
