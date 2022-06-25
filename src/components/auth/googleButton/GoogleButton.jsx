import { useState } from 'react';

import { ReactComponent as GoogleIcon } from 'assets/images/svg/google-icon.svg';
import { Loader } from 'components/common/loader/Loader';

import { LinkStyled } from './GoogleButton.styled';

const GoogleButton = ({ className }) => {
  const url = process.env.REACT_APP_API_BASE_URL;
  const [isLoading, setIsLoading] = useState(false);

  const disableLink = () => {
    setIsLoading(true);
  };

  return (
    <>
      {isLoading && <Loader />}
      <LinkStyled
        isLoading={isLoading}
        href={`${url}/api/users/google`}
        onClick={disableLink}
        className={className}
      >
        <GoogleIcon />
        <span>Google</span>
      </LinkStyled>
    </>
  );
};

export default GoogleButton;
