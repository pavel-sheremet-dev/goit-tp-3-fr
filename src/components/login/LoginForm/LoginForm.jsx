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
  LoginFormRef,
  LoginRef,
  Error,
} from './LoginForm.styled';
import {
  validationLoginSchema,
  validate,
} from 'helpers/validation/validationLoginForm';

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

        <LoginFormButton type="button">Увійти</LoginFormButton>
      </Form>
      <LoginRef href="/signup">Реєстрація</LoginRef>
    </>
  );

  // const formik = useFormik({
  //   initialValues: {
  //     ...initialValues,
  //     password: '',
  //   },
  //   validationSchema: validationLoginSchema,
  //   validate,
  //   onSubmit: (values, obj)=> {
  //     const { email, password } = values;
  //     dispatch(authOperations.signIn({ email, password }));
  //     obj.setSubmitting(false);
  //     sessionStorage.setItem('auth-form', null);
  //     setInitialValues(getInitialValues());
  //     obj.resetForm();
  //   }
  // } );

  // return (
  //   <>
  //     <Form onSubmit={formik.handleSubmit}>
  //       <LoginFormTitle>
  //         Електронна адреса <LoginFormIcon>*</LoginFormIcon>
  //       </LoginFormTitle>
  //       <Input
  //         id="email"
  //         name="email"
  //         type="text"
  //         onChange={formik.handleChange}
  //         value={formik.values.email}
  //         placeholder="your@email.com"
  //       />
  //       {formik.touched.email && formik.errors.email ? (
  //         <Error>{formik.errors.email}</Error>
  //       ) : null}

  //       <LoginFormTitle>
  //         Пароль <LoginFormIcon>*</LoginFormIcon>
  //       </LoginFormTitle>
  //       <Input
  //         id="password"
  //         name="password"
  //         type="text"
  //         onChange={formik.handleChange}
  //         value={formik.values.password}
  //         placeholder="Пароль"
  //       />
  //       {formik.touched.password && formik.errors.password ? (
  //         <Error>{formik.errors.password}</Error>
  //       ) : null}

  //       <LoginFormButton>
  //         <LoginFormRef type="button">Увійти</LoginFormRef>
  //       </LoginFormButton>
  //       <LoginRef>Реєстрація</LoginRef>
  //     </Form>
  //   </>
  // );
};

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTI0OTI2ZTQ5ZTFlMGMzNTJmYWJhOCIsImlhdCI6MTY1Mzc2MDM3NCwiZXhwIjoxNjUzNzYzOTc0fQ.3APCyLtk0o7_EmD_fUY_zu_rluEk8Q8-9GVDQp6CMCw

export default LoginForm;
