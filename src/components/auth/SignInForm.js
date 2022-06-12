import React, { useState, useEffect } from 'react';
import { Form, Formik, useFormikContext } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';
import { getValueFromLocalStorage, InputField } from './SignUpForm';

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

const SignInForm = () => {
  const [initialValues, setInitialValues] = useState(() => getInitialValues());
  const dispatch = useDispatch();
  const error = useSelector(authSelectors.getError);
  // const loading = useSelector(authSelectors.getLoading);

  useEffect(() => {
    if (!error) return;
    console.log('error', error);
  }, [error]);

  return (
    <>
      <Formik
        initialValues={{ ...initialValues, password: '' }}
        validationSchema={Yup.object({
          email: Yup.string().email().required('Обов`язкове поле'),
          password: Yup.string()
            .matches(
              /^[0-9a-zA-Z_-]{8,20}$/,
              '0-9a-zA-Z Від 8 до 20 символів, знаки _ -',
            )
            .required('Обов`язкове поле'),
        })}
        onSubmit={(values, obj) => {
          const { email, password } = values;
          dispatch(authOperations.signIn({ email, password }));
          obj.setSubmitting(false);
          sessionStorage.setItem('auth-form', null);
          setInitialValues(getInitialValues());
          obj.resetForm();
        }}
        enableReinitialize
      >
        <Form>
          <InputField
            label="Електронна адреса *"
            name="email"
            type="text"
            placeholder="your@email.com"
          />

          <InputField
            label="Пароль *"
            name="password"
            type="password"
            placeholder="..."
          />

          <button type="submit">Увійти</button>
          <FormState />
        </Form>
      </Formik>
    </>
  );

  // return (
  //   <>
  //     <Formik
  //       initialValues={{ ...initialValues, password: '' }}
  //       validationSchema={Yup.object({
  //         email: Yup.string().email().required('Обов`язкове поле'),
  //         password: Yup.string()
  //           .matches(
  //             /^[0-9a-zA-Z_-]{8,20}$/,
  //             '0-9a-zA-Z Від 8 до 20 символів, знаки _ -',
  //           )
  //           .required('Обов`язкове поле'),
  //       })}
  //       onSubmit={(values, obj) => {
  //         const { email, password } = values;
  //         dispatch(authOperations.signIn({ email, password }));
  //         obj.setSubmitting(false);
  //         sessionStorage.setItem('auth-form', null);
  //         setInitialValues(getInitialValues());
  //         obj.resetForm();
  //       }}
  //       enableReinitialize
  //     >
  //       <Form>
  //         <InputField
  //           label="Електронна адреса *"
  //           name="email"
  //           type="text"
  //           placeholder="your@email.com"
  //         />

  //         <InputField
  //           label="Пароль *"
  //           name="password"
  //           type="password"
  //           placeholder="..."
  //         />

  //         <button type="submit">Увійти</button>
  //         <FormState />
  //       </Form>
  //     </Formik>
  //   </>
  // );
};

export default SignInForm;
