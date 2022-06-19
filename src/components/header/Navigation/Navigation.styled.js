import styled from 'styled-components';

export const StyledNav = styled.nav`
  display: flex;
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
  min-width: 33px;
  height: 33px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.21;
  background-color: ${({ theme }) => theme.colors.iconsHover};
  border-radius: 50%;
`;
export const StyledHeaderButton = styled.button`
  color: ${({ theme }) => theme.colors.defaultFont};
  display: inline-block;
  min-width: 60px;
  margin-left: 8px;
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
  transition: ${({ theme }) => theme.transition('color')};
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.mainBrandColor};
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    margin-left: 8px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    margin-left: 14px;
  }
`;

export const StyledSpanBorder = styled.span`
  margin: 0 8px;
  width: 1px;
  height: 33px;
  background-color: ${({ theme }) => theme.colors.borderColor};
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    margin-left: 6px;
  }
`;
