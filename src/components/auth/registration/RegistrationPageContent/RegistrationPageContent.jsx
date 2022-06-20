import GoogleButton from 'components/auth/login/googleButton/GoogleButton';
import RegistrationForm from 'components/auth/registration/registrationForm/RegistrationForm';
import { StyledSection, StyledTablet } from './RegistrationPageContent.styled';

export default function RegistrationPageContent({ titleRef }) {
  return (
    <StyledSection>
      <StyledTablet>
        <GoogleButton titleRef={titleRef} />
        <RegistrationForm />
      </StyledTablet>
    </StyledSection>
  );
}
