import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';
import { useFormik, useFormikContext } from 'formik';
import {
  Form,
  RegistrationFormTitle,
  LoginFormIcon,
  Input,
  LoginFormButton,
  LoginRef,
  Error,
  Appeal,
  Question,
} from './RegistrationForm.styled';
import {
  validationRegistrationSchema,
  validate,
} from 'helpers/validation/validationRegistrationForm';
import { routes } from 'routes/config';

export const getValueFromLocalStorage = key => localStorage.getItem(key) ?? '';

export const getInitialValues = () =>
  JSON.parse(sessionStorage.getItem('auth-form')) ?? {
    name: getValueFromLocalStorage('username'),
    email: getValueFromLocalStorage('useremail'),
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
      name: '',
      email: '',
      password: '',
      repassword: '',
    },
    validationSchema: validationRegistrationSchema,
    validate,
    onSubmit: (values, obj) => {
      const { name, email, password } = values;
      const credentials = { name, email, password };
      dispatch(authOperations.signUp(credentials));
      obj.setSubmitting(false);
      localStorage.setItem('info', true);
      sessionStorage.setItem('auth-form', null);
      setInitialValues(getInitialValues());
      obj.resetForm();
    },
  });

  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <RegistrationFormTitle>
          Ім'я <LoginFormIcon>*</LoginFormIcon>
        </RegistrationFormTitle>
        <Input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          placeholder="..."
        />
        {formik.touched.name && formik.errors.name ? (
          <Error>{formik.errors.name}</Error>
        ) : null}

        <RegistrationFormTitle>
          Електронна адреса <LoginFormIcon>*</LoginFormIcon>
        </RegistrationFormTitle>
        <Input
          id="email"
          name="email"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email.trim()}
          placeholder="your@email.com"
        />
        {formik.touched.email && formik.errors.email ? (
          <Error>{formik.errors.email}</Error>
        ) : null}

        <RegistrationFormTitle>
          Пароль <LoginFormIcon>*</LoginFormIcon>
        </RegistrationFormTitle>
        <Input
          className="password"
          id="password"
          name="password"
          type="password"
          maxLength={30}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password.trim()}
          placeholder="..."
        />
        {formik.touched.password && formik.errors.password ? (
          <Error>{formik.errors.password}</Error>
        ) : null}

        <RegistrationFormTitle>
          Підтвердити пароль <LoginFormIcon>*</LoginFormIcon>
        </RegistrationFormTitle>
        <Input
          className="password"
          id="repassword"
          name="repassword"
          type="password"
          maxLength={30}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.repassword.trim()}
          placeholder="..."
        />
        {formik.touched.repassword && formik.errors.repassword ? (
          <Error>{formik.errors.repassword}</Error>
        ) : null}
        <LoginFormButton type="submit">Зареєструватися</LoginFormButton>
      </Form>

      <Question>
        <Appeal> Вже з нами?</Appeal>
        <LoginRef to={routes.login.path}>Увійти</LoginRef>
      </Question>
    </>
  );
};

export default LoginForm;
