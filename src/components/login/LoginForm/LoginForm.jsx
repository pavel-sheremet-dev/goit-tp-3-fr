import { NavLink, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signIn } from 'redux/auth/auth-operations';
import { useFormik } from 'formik';
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

const LoginForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationLoginSchema,
    validate,
    onSubmit: (values, { resetForm }) => {
      // alert(JSON.stringify(values, null, 2));

      const { email, password } = values;
      dispatch(signIn({ email, password }));
      resetForm();
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
          // onBlur={formik.handleBlur}
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
          type="text"
          onChange={formik.handleChange}
          // onBlur={formik.handleBlur}
          value={formik.values.password}
          placeholder="Пароль"
        />
        {formik.touched.password && formik.errors.password ? (
          <Error>{formik.errors.password}</Error>
        ) : null}

        <LoginFormButton>
          <LoginFormRef type="button">Увійти</LoginFormRef>
          {/* <NavLink to='/training'></NavLink>  */}
        </LoginFormButton>
        <LoginRef>Реєстрація</LoginRef>
      </Form>
    </>
  );
};

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTI0OTI2ZTQ5ZTFlMGMzNTJmYWJhOCIsImlhdCI6MTY1Mzc2MDM3NCwiZXhwIjoxNjUzNzYzOTc0fQ.3APCyLtk0o7_EmD_fUY_zu_rluEk8Q8-9GVDQp6CMCw

export default LoginForm;
