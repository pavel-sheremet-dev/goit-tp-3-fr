import {
  BackgroundContainer,
  SignContainer,
} from 'components/common/container/Container.styled';
import { NavLink } from 'react-router-dom';
import { routes } from 'routes/config';
import GoogleButton from '../googleButton/GoogleButton';

import { useTranslation } from 'react-i18next';
import SignInForm from './SignInForm';
import { ContentBox, LinkBox, SectionStyled } from '../signUp/SignUp.styled';

const SignIn = () => {
  const { t } = useTranslation();

  return (
    <SectionStyled>
      <BackgroundContainer>
        <SignContainer>
          <ContentBox>
            <GoogleButton className={'sign'} />
            <SignInForm />
            <LinkBox>
              <NavLink to={routes.signUp.path}>{t('signup')}</NavLink>
            </LinkBox>
          </ContentBox>
        </SignContainer>
      </BackgroundContainer>
    </SectionStyled>
  );
};

export default SignIn;
