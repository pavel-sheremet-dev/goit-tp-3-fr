import React, { useState, useEffect } from 'react';
import { Form, Formik, useField, useFormikContext } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';

export const getValueFromLocalStorage = key => localStorage.getItem(key) ?? '';

export const getInitialValues = () =>
  JSON.parse(sessionStorage.getItem('auth-form')) ?? {
    name: getValueFromLocalStorage('username'),
    email: getValueFromLocalStorage('useremail'),
  };

export const InputField = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        className="text-input"
        id={props.id || props.name}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
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

const SignUpForm = () => {
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
        initialValues={{
          ...initialValues,
          password: '',
          passwordConfirmation: '',
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .matches(
              /^[A-Za-zА-Яа-яґҐЁёІіЇїЄє'’ʼ\s-]{3,30}$/,
              'A-Za-zА-Яа-яґҐЁёІіЇїЄє 3-30 символів, апострофи, дефіси та пробіли',
            )
            .required('Обов`язкове поле'),
          email: Yup.string().email().required('Обов`язкове поле'),
          password: Yup.string()
            .matches(
              /^[0-9a-zA-Z_-]{8,20}$/,
              '0-9a-zA-Z Від 8 до 20 символів, знаки _ -',
            )
            .required('Обов`язкове поле'),
          passwordConfirmation: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Має співпадати з паролем')
            .required('Обов`язкове поле'),
        })}
        onSubmit={(values, obj) => {
          const { name, email, password } = values;
          const credentials = { name, email, password };
          dispatch(authOperations.signUp(credentials));
          obj.setSubmitting(false);
          sessionStorage.setItem('auth-form', null);
          setInitialValues(getInitialValues());
          obj.resetForm();
        }}
        enableReinitialize
      >
        <Form>
          <InputField
            label="Iм'я *"
            name="name"
            type="text"
            placeholder="..."
          />

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

          <InputField
            label="Підтвердити пароль *"
            name="passwordConfirmation"
            type="password"
            placeholder="..."
          />

          <button type="submit">Зареєструватися</button>
          <FormState />
        </Form>
      </Formik>
    </>
  );
};

export default SignUpForm;
