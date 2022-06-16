import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';

import {
  Form,
  LoginFormTitle,
  LoginFormIcon,
  Input,
  LoginFormButton,
  LoginRef,
  Error,
} from './LoginForm.styled';
import {
  validationLoginSchema,
  validate,
} from 'helpers/validation/validationLoginForm';
import { routes } from 'routes/config';

const LoginForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(authSelectors.getError);

  useEffect(() => {
    if (!error) return;
  }, [error]);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationLoginSchema,
    validate,
    onSubmit: (values, obj) => {
      const { email: e, password } = values;
      const email = e.toLowerCase();
      dispatch(authOperations.signIn({ email, password }));
      obj.setSubmitting(false);
      sessionStorage.setItem('auth-form', null);
      obj.resetForm();
    },
  });

  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <LoginFormTitle>
          Електронна адреса <LoginFormIcon>*</LoginFormIcon>
        </LoginFormTitle>
        <Input
          id="email"
          name="email"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.email.trim()}
          placeholder="your@email.com"
        />
        {formik.touched.email && formik.errors.email ? (
          <Error>{formik.errors.email}</Error>
        ) : null}

        <LoginFormTitle>
          Пароль <LoginFormIcon>*</LoginFormIcon>
        </LoginFormTitle>
        <Input
          className="password"
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password.trim()}
          placeholder="Пароль"
        />
        {formik.touched.password && formik.errors.password ? (
          <Error>{formik.errors.password}</Error>
        ) : null}

        <LoginFormButton type="submit">Увійти</LoginFormButton>
      </Form>
      <LoginRef to={routes.signUp.path}>Реєстрація</LoginRef>
    </>
  );
};

export default LoginForm;
