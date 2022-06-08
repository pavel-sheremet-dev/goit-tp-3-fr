import styled from 'styled-components';

export const StyledQuote = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-right: 45px;
  padding-bottom: 16px;
  margin-left: 46px;

  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  text-align: center;
  color: ${({ theme }) => theme.colors.defaultFont};
  &:after {
    content: '';
    display: block;
    width: 100px;
    height: 1px;
    margin-top: 16px;
    background-color: ${({ theme }) => theme.colors.after};
  }
`;
export const StyledTitle = styled.span`
  display: block;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: ${({ theme }) => theme.colors.lightText};
`;
