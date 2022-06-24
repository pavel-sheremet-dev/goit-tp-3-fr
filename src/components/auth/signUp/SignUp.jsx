import {
  BackgroundContainer,
  SignContainer,
} from 'components/common/container/Container.styled';
import { NavLink } from 'react-router-dom';
import { routes } from 'routes/config';
import GoogleButton from '../googleButton/GoogleButton';
import { ContentBox, LinkBox, SectionStyled } from './SignUp.styled';
import SignUpForm from './SignUpFrom';
import { useTranslation } from 'react-i18next';

const Signup = () => {
  const { t } = useTranslation();

  return (
    <SectionStyled>
      <BackgroundContainer forSignup>
        <SignContainer forSignup>
          <ContentBox>
            <GoogleButton className={'sign'} />
            <SignUpForm />
            <LinkBox>
              <p>
                {t('already')}
                {'\u00A0'}
              </p>
              <NavLink to={routes.login.path}>{t('log_in')}</NavLink>
            </LinkBox>
          </ContentBox>
        </SignContainer>
      </BackgroundContainer>
    </SectionStyled>
  );
};

export default Signup;
