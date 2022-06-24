import styled from 'styled-components';

export const BtnBlockContrainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 280px;
  margin: 0 auto;

  & .block-item {
    display: flex;
    justify-content: center;
    align-items: center;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.21;

    min-width: ${({ column }) => (column ? '150px' : '100px')};
    ${({ fullWidth }) =>
      fullWidth ? 'min-width: calc((100% - 20px)/ 2) ' : null};
    height: 40px;
    padding: 10px;

    @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
      min-width: ${({ column }) => (column ? '150px' : '130px')};
      ${({ fullWidth }) =>
        fullWidth ? 'min-width: calc((100% - 20px)/ 2) ' : null};
    }
  }

  & .block-item:first-child {
    margin-right: ${({ column }) => (column ? '0' : '20px')};
    margin-bottom: ${({ column }) => (column ? '20px' : '0')};

    @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
      margin-right: 30px;
    }
  }
`;
