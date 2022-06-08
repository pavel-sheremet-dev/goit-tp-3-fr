import Container from 'components/common/container/Container';
import {
  StyledGoogleButton,
  StyledRef,
  StyledContainer,
} from './GoogleButton.styled';
import { ReactComponent as GoogleIcon } from '../../../images/svg/google-icon.svg';
import Section from '../../common/section/Section';

export default function GoogleButton({ onClick, style }) {
  return (
    
        <StyledContainer>
          <StyledGoogleButton onClick={onClick} style={style}>
            <GoogleIcon />
            <StyledRef
              href="
          http://localhost:7778/users/google
          "
            >
              Google
            </StyledRef>
          </StyledGoogleButton>
          </StyledContainer>
     
  );
}

// <section className={s.section}>
//       <div className={s.contentBgImg}>
//         <Container>
//           <Content  />
//         </Container>
//       </div>
//     </section>
