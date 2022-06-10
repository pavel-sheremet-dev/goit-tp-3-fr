import { NavLink, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signUp } from 'redux/auth/auth-operations';
import { useFormik } from 'formik';
import {
  Form,
  RegistrationFormTitle,
  LoginFormIcon,
  Input,
  LoginFormButton,
  LoginFormRef,
  LoginRef,
  Error,
  Appeal,
  Question,
} from './RegistrationForm.styled';
import {
  validationRegistrationSchema,
  validate,
} from 'helpers/validation/validationRegistrationForm';

const LoginForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      repassword: '',
    },
    validationSchema: validationRegistrationSchema,
    validate,
    onSubmit: (values, { resetForm }) => {
      // alert(JSON.stringify(values, null, 2));

      const { name, email, password } = values;
      dispatch(signUp({ email, name, password }));
      resetForm();
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
          value={formik.values.email}
          placeholder="your@email.com"
        />
        {formik.touched.email && formik.errors.email ? (
          <Error>{formik.errors.email}</Error>
        ) : null}

        <RegistrationFormTitle>
          Пароль <LoginFormIcon>*</LoginFormIcon>
        </RegistrationFormTitle>
        <Input
          id="password"
          name="password"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          placeholder="..."
        />
        {formik.touched.password && formik.errors.password ? (
          <Error>{formik.errors.password}</Error>
        ) : null}

        <RegistrationFormTitle>
          Підтвердити пароль <LoginFormIcon>*</LoginFormIcon>
        </RegistrationFormTitle>
        <Input
          id="repassword"
          name="repassword"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.repassword}
          placeholder="..."
        />
        {formik.touched.repassword && formik.errors.repassword ? (
          <Error>{formik.errors.repassword}</Error>
        ) : null}

        <LoginFormButton>
          <LoginFormRef type="button">Зареєструватися</LoginFormRef>
          <NavLink to="/training"></NavLink>
        </LoginFormButton>
        <Question>
          <Appeal> Вже з нами?</Appeal>
          <LoginRef href="/login">Увійти</LoginRef>
        </Question>
      </Form>
    </>
  );
};

export default LoginForm;
