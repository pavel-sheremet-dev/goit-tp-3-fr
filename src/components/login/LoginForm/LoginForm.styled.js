import styled from 'styled-components';

export const LoginFormSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 32px;
`;

export const LoginFormTitle = styled.p`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 8px;
  width: 280px;
  max-width: 100%;

  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }) => theme.colors.white};
`;

export const LoginFormIcon = styled.span`
  margin-left: 3px;
  color: ${({ theme }) => theme.colors.mainBrandColor};
`;

export const LoginFormInput = styled.input`
  margin-bottom: 20px;
  width: 280px;
  max-width: 100%;
  height: 42px;

  background-color: ${({ theme }) => theme.colors.iconsHover};
  box-shadow: inset 0px 1px 2px rgba(29, 29, 27, 0.15);
`;

export const LoginFormButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 280px;
  max-width: 100%;
  height: 60px;
  margin-bottom: 16px;
  background-color: ${({ theme }) => theme.colors.mainBrandColor};
  color: ${({ theme }) => theme.colors.white};
`;

export const LoginFormRef = styled.a`
  display: block;
  margin: 0 auto;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
`;

export const LoginRef = styled.a`
  display: block;
  margin: 0 auto;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.mainBrandColor};
`;
