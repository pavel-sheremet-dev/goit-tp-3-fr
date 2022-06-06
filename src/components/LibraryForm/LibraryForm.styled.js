import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    flex-direction: row;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    align-items: end;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.lightText};

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    line-height: 1.21;
    margin-left: 0;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    &:first-child {
      margin-right: 16px;
    }
  }
`;

export const LabelCount = styled(Label)`
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    margin-left: 32px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    margin-left: 16px;
  }
`;

export const Input = styled.input`
  width: 280px;
  padding: 12px;
  margin-bottom: 20px;
  margin-top: 8px;
  border: 1px solid ${({ theme }) => theme.colors.placeholder};

  &:hover,
  &:focus,
  &:active {
    border: 1px solid transparent;
    outline: none;
    box-shadow: 0px -1px 2px ${({ theme }) => theme.colors.placeholder};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    width: 152px;
    margin-bottom: 0;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    width: 134px;
  }
`;

export const InputTitle = styled(Input)`
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    width: 704px;
    margin-bottom: 24px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    width: 346px;
    margin-bottom: 0;
  }
`;

export const InputAuthor = styled(Input)`
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    width: 336px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    width: 250px;
  }
`;

export const Button = styled.button`
  padding: 12px 58px;
  margin-top: 20px;
  font-size: 14px;
  font-weight: 500;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.defaultFont};
  cursor: pointer;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.mainBrandColor};
    border: 1px solid transparent;
    box-shadow: 0px 2px 4px ${({ theme }) => theme.colors.btnShadow};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    margin-top: 40px;
    line-height: 1.21;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    margin-top: 0;
    padding: 12px 62px;
    margin-left: 47px;
  }
`;

export const ErrorContainer = styled.div`
  display: flex;
  font-size: 10px;
  color: #ff0000;
  height: 10px;
`;
