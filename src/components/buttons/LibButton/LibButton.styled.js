import styled from 'styled-components';

export const LibActionButton = styled.button`
  background: ${({ theme }) => theme.colors.mainBrandColor};
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: ${({ theme }) => theme.colors.buttonText};
  background-color: ${({ theme }) => theme.colors.mainBrandColor};
  outline: none;
  cursor: pointer;

  padding: 10px 15px;
  margin: 0 auto;
  display: flex;
  margin: 0 auto 130px auto;
  width: max-content;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.hover};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
  }
`;
