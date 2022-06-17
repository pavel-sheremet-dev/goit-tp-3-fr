import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
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

const LoginForm = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const error = useSelector(authSelectors.getError);

  useEffect(() => {
    if (!error) return;
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
      obj.resetForm();
    },
  });

  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <RegistrationFormTitle>
          {t('name')} <LoginFormIcon>*</LoginFormIcon>
        </RegistrationFormTitle>
        <Input
          id="name"
          name="name"
          type="text"
          maxLength={100}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          placeholder="..."
        />
        {formik.touched.name && formik.errors.name ? (
          <Error>{formik.errors.name}</Error>
        ) : null}

        <RegistrationFormTitle>
          {t('email')} <LoginFormIcon>*</LoginFormIcon>
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
          {t('password')} <LoginFormIcon>*</LoginFormIcon>
        </RegistrationFormTitle>
        <Input
          className="password"
          id="password"
          name="password"
          type="password"
          minLength={5}
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
          {t('repeatPassword')} <LoginFormIcon>*</LoginFormIcon>
        </RegistrationFormTitle>
        <Input
          className="password"
          id="repassword"
          name="repassword"
          type="password"
          minLength={5}
          maxLength={30}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.repassword.trim()}
          placeholder="..."
        />
        {formik.touched.repassword && formik.errors.repassword ? (
          <Error>{formik.errors.repassword}</Error>
        ) : null}
        <LoginFormButton type="submit">{t('registering')}</LoginFormButton>
      </Form>

      <Question>
        <Appeal>{t('already')}</Appeal>
        <LoginRef to={routes.login.path}>{t('log_in')}</LoginRef>
      </Question>
    </>
  );
};

export default LoginForm;
