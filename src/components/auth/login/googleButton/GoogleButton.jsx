import { useState } from 'react';
import {
  StyledRef,
  StyledContainer,
  ContainerGoogleIcon,
} from './GoogleButton.styled';
import { ReactComponent as GoogleIcon } from 'images/svg/google-icon.svg';
import { Loader } from 'components/common/loader/Loader';

export default function GoogleButton() {
  const url = process.env.REACT_APP_API_BASE_URL;
  const [isLoading, setIsLoading] = useState(false);

  const toggleLoading = () => {
    setIsLoading(!isLoading);
  };

  return (
    <>
      {isLoading && <Loader />}
      <StyledContainer>
        <StyledRef
          href={`${url}/api/users/google`}
          disabled={isLoading}
          onClick={toggleLoading}
        >
          <GoogleIcon />
          <ContainerGoogleIcon></ContainerGoogleIcon>
          Google
        </StyledRef>
      </StyledContainer>
    </>
  );
}
