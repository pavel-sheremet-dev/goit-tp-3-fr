import React, { useState, useEffect } from 'react';
import { Form, Formik, useFormikContext } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import InputField from '../inputField/InputField';
import { SignButton } from 'components/reusableComponents/buttons/Buttons.styled';
import { useTranslation } from 'react-i18next';
import { getValueFromSessionStorage } from '../service';

export const getInitialValues = () =>
  JSON.parse(sessionStorage.getItem('auth-form-signup')) ?? {
    name: getValueFromSessionStorage('username'),
    email: getValueFromSessionStorage('useremail'),
  };

const FormState = () => {
  const { values } = useFormikContext();

  values.name = values.name.replace(/^[^А-Яа-яґҐЁёІіЇїЄє\w]/, '');
  values.email = values.email.replace(/^[^\w]/, '');
  values.password = values.password.trim();

  useEffect(() => {
    sessionStorage.setItem('auth-form-signup', JSON.stringify(values));
  }, [values]);

  useEffect(() => {
    sessionStorage.setItem('username', values.name);
    sessionStorage.setItem('useremail', values.email);
  }, [values.email, values.name]);

  return null;
};

const SignUpForm = () => {
  const [initialValues, setInitialValues] = useState(() => getInitialValues());
  const dispatch = useDispatch();
  const { t } = useTranslation();

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
            .min(3, 'Мін. 3 символи')
            .max(30, 'Макс. 30 символів')
            .matches(
              /^[А-Яа-яґҐЁёІіЇїЄє'’ʼ\s\w-]{3,30}$/,
              'Дозволені знаки: пробіл, дефіс, апостроф',
            )
            .required('Обов`язкове поле'),
          email: Yup.string()
            .min(7, 'Мін. 7 символів')
            .max(63, 'Макс. 63 символів')
            .email('Невірно вказаний email')
            .required(''),
          password: Yup.string()
            .min(8, 'Мін. 8 символи')
            .max(30, 'Макс. 30 символів')
            .matches(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&_]{8,30}$/,
              'Мін. 1 маленька, 1 велика букви та 1 цифра. Дозволені знаки $ ! % * ? & _',
            )
            .required('Обов`язкове поле'),
          passwordConfirmation: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Має співпадати з паролем')
            .required('Обов`язкове поле'),
        })}
        onSubmit={(values, obj) => {
          const { name, email, password } = values;
          const credentials = {
            name: name.trim(),
            email: email.trim(),
            password,
          };
          dispatch(authOperations.signUp(credentials));
          obj.setSubmitting(false);
          sessionStorage.removeItem('auth-form-signup');
          setInitialValues(getInitialValues());
          obj.resetForm();
        }}
        enableReinitialize
      >
        <Form>
          <InputField
            label={t('name')}
            required
            name="name"
            type="text"
            placeholder="..."
          />

          <InputField
            label={t('email')}
            required
            name="email"
            type="text"
            placeholder="your@email.com"
          />

          <InputField
            label={t('password')}
            required
            name="password"
            type="password"
            placeholder="..."
          />

          <InputField
            label={t('repeatPassword')}
            required
            name="passwordConfirmation"
            type="password"
            placeholder="..."
          />

          <SignButton type="submit">{t('registering')}</SignButton>
          <FormState />
        </Form>
      </Formik>
    </>
  );
};

export default SignUpForm;
