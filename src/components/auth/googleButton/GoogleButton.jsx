import { useState } from 'react';

import { ReactComponent as GoogleIcon } from 'assets/images/svg/google-icon.svg';
import { Loader } from 'components/common/loader/Loader';

import { LinkStyled } from './GoogleButton.styled';

const GoogleButton = ({ className }) => {
  const url = process.env.REACT_APP_API_BASE_URL;
  const [isLoading, setIsLoading] = useState(false);

  const toggleLoading = () => {
    setIsLoading(!isLoading);
  };

  return (
    <>
      {isLoading && <Loader />}
      <LinkStyled
        href={`${url}/api/users/google`}
        disabled={isLoading}
        onClick={toggleLoading}
        className={className}
      >
        <GoogleIcon />
        <span>Google</span>
      </LinkStyled>
    </>
  );
};

export default GoogleButton;
