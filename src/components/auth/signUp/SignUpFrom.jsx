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
    sessionStorage.setItem('username', values.name ?? '');
    sessionStorage.setItem('useremail', values.email ?? '');
  }, [values.email, values.name]);

  return null;
};

const SignUpForm = () => {
  const [initialValues, setInitialValues] = useState(() => getInitialValues());
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const val = t('validation', { returnObjects: true });

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
            .min(3, val.min3)
            .max(30, val.max30)
            .matches(/^[А-Яа-яґҐЁёІіЇїЄє'’ʼ\s\w-]{3,30}$/, val.errname)
            .required(val.required),
          email: Yup.string()
            .min(7, val.min7)
            .max(63, val.max63)
            .email(val.erremail)
            .required(val.required),
          password: Yup.string()
            .min(8, val.min8)
            .max(30, val.max30)
            .matches(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&_]{8,30}$/,
              val.errpassword,
            )
            .required(val.required),
          passwordConfirmation: Yup.string()
            .oneOf([Yup.ref('password'), null], val.errcongpassword)
            .required(val.required),
        })}
        onSubmit={(values, obj) => {
          const { name, email, password } = values;
          const credentials = {
            name: name.trim(),
            email: email.trim().toLowerCase(),
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
