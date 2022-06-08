import { Formik } from 'formik';
import * as  Yup from 'yup';

import {
  LoginFormSection,
  LoginFormTitle,
  LoginFormIcon,
  LoginFormInput,
  LoginFormButton,
  LoginFormRef,
  LoginRef,
} from './LoginForm.styled';

const LoginForm = () => {
  return (
    <>
      <LoginFormSection>
        <LoginFormTitle>
          Електронна адреса <LoginFormIcon>*</LoginFormIcon>
        </LoginFormTitle>
        <LoginFormInput></LoginFormInput>
        <LoginFormTitle>
          Пароль <LoginFormIcon>*</LoginFormIcon>
        </LoginFormTitle>
        <LoginFormInput></LoginFormInput>
        <LoginFormButton>
          <LoginFormRef href="">Увійти</LoginFormRef>
        </LoginFormButton>
        <LoginRef>Реєстрація</LoginRef>
      </LoginFormSection>
    </>
  );
};

export default LoginForm;
