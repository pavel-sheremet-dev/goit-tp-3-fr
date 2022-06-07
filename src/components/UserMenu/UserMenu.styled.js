import styled from 'styled-components';

export const StyledSpanBorder = styled.span`
  margin-left: 8px;
  width: 0px;
  height: 33px;
  border: 1px solid #e0e5eb;
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    margin-left: 6px;
  }
`;
