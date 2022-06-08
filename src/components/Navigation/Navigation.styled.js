import styled from 'styled-components';

export const StyledNav = styled.nav`
  display: flex;
  margin-right: 14px;
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    margin-left: 0px;
    margin-right: 0px;
  }
`;

export const StyledSpanName = styled.span`
  font-weight: 300;
  font-size: 14px;
  line-height: 1.21;
  margin-left: 12px;
`;

export const StyledSpanFirstLetterName = styled.span`
  width: 33px;
  height: 33px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.21;
  background-color: ${({ theme }) => theme.colors.iconsHover};
  border-radius: 50%;
`;
export const StyledHeaderButton = styled.button.attrs(props => ({
  type: 'sumbit',
}))`
  display: inline-block;
  margin-left: 14px;
  padding: 0px;
  font-weight: 300;
  font-size: 14px;
  line-height: 1.21;
  text-decoration: underline;
  text-underline-position: under;
  -webkit-text-underline-position: under;
  -ms-text-underline-position: below;
  background: none;
  cursor: pointer;
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    margin-left: 8px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    margin-left: 14px;
  }
`;
