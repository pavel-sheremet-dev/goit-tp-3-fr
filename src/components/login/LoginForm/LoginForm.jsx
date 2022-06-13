import React, { useState, useEffect } from 'react';
import { useFormik, useFormikContext } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';
import { getValueFromLocalStorage, InputField } from './SignUpForm';

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

const getInitialValues = () =>
  JSON.parse(sessionStorage.getItem('auth-form')) ?? {
    email: getValueFromLocalStorage('name'),
  };

const FormState = () => {
  const { values } = useFormikContext();

  useEffect(() => {
    sessionStorage.setItem('auth-form', JSON.stringify(values));
  }, [values]);

  useEffect(() => {
    localStorage.setItem('username', values.name);
    localStorage.setItem('useremail', values.email);
  }, [values.email, values.group, values.name]);

  return null;
};

const LoginForm = () => {
  const [initialValues, setInitialValues] = useState(() => getInitialValues());
  const dispatch = useDispatch();
  const error = useSelector(authSelectors.getError);

  useEffect(() => {
    if (!error) return;
    console.log('error', error);
  }, [error]);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationLoginSchema,
    validate,
    onSubmit: (values, obj) => {
      const { email, password } = values;
      dispatch(authOperations.signIn({ email, password }));
      obj.setSubmitting(false);
      sessionStorage.setItem('auth-form', null);
      setInitialValues(getInitialValues());
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
          value={formik.values.email}
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
          value={formik.values.password}
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
