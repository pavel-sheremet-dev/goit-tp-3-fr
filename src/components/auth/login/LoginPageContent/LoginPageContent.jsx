import { useSelector } from 'react-redux';
import GoogleButton from 'components/auth/login/googleButton/GoogleButton';
import LoginForm from 'components/auth/login/LoginForm/LoginForm';
import { StyledSection, StyledTablet } from './LoginPageContent.styled';
import { Loader } from 'components/common/Loader/Loader';
import { authSelectors } from 'redux/auth';

export default function LoginPageContent() {
  const loading = useSelector(authSelectors.getLoading);
  return (
    <StyledSection>
      <StyledTablet>
        <GoogleButton />

        <LoginForm />
      </StyledTablet>
    </StyledSection>
    //  {loading && <Loader />}
  );
}
