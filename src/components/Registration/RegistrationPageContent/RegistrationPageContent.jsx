import GoogleButton from 'components/googleButton/googleButton';
import RegistrationForm from 'components/Registration/RegistrationForm/RegistrationForm';
import { StyledSection, StyledTablet } from './RegistrationPageContent.styled';

export default function RegistrationPageContent() {
  return (
    <StyledSection>
      <StyledTablet>
        <GoogleButton />
        <RegistrationForm />
      </StyledTablet>
    </StyledSection>
  );
}
