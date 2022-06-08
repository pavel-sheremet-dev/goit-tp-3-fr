import styled from 'styled-components';

export const StyledContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 33px;
  padding-bottom: 28px;
`;

export const StyledGoogleButton = styled.div`
   display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 14px;
  padding-right: 50px;
  padding-top: 11px;
  padding-bottom: 11px;
  width: 150px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.iconsHover};
  cursor: pointer;
  box-shadow: 0px 2px 2px rgba(9, 30, 63, 0.15);
  }
`;

export const StyledRef = styled.a`
display: block;
padding-left: 16px;
font-family: 'Roboto', sans-serif;
font-weight: 700;
font-size: 16px;
line-height: 38px;
color: ${({ theme }) => theme.colors.googleText};
  }
`;
