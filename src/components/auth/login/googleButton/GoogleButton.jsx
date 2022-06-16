import {
  StyledGoogleButton,
  StyledRef,
  StyledContainer,
  ContainerGoogleIcon,
} from './GoogleButton.styled';
import { ReactComponent as GoogleIcon } from 'images/svg/google-icon.svg';

export default function GoogleButton({ onClick, style }) {
  const url = process.env.REACT_APP_API_BASE_URL;

  return (
    <StyledContainer>
      <StyledGoogleButton onClick={onClick} style={style}>
        <StyledRef href={`${url}/api/users/google`}>
          <ContainerGoogleIcon>
            <GoogleIcon />
          </ContainerGoogleIcon>
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
