import GoogleButton from 'components/googleButton/googleButton';
import RegistrationForm from 'components/Registration/RegistrationForm/RegistrationForm';
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
