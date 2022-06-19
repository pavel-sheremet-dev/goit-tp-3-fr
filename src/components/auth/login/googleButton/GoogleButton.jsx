import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect, useCallback } from 'react';
import {
  StyledRef,
  StyledContainer,
  ContainerGoogleIcon,
} from './GoogleButton.styled';
import { ReactComponent as GoogleIcon } from 'images/svg/google-icon.svg';
import { authSelectors, authOperations } from 'redux/auth';
import { Loader } from 'components/common/Loader/Loader';
import { getUser } from 'redux/auth/auth-operations';

export default function GoogleButton() {
  const url = process.env.REACT_APP_API_BASE_URL;
  const loading = useSelector(authSelectors.getLoading);
  const userName = useSelector(authSelectors.getUserName);
  const userEmail = useSelector(authSelectors.getUserEmail);

  // console.log(loading);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const toggleLoading = () => {
    setIsLoading(!isLoading);
  };
  // const toggleLoading = useCallback(
  //  (userName, userEmail) => {
  //     dispatch(authOperations.signIn({name: userName, email: userEmail}));
  //   },
  //   [dispatch],
  // );

  // const toggleLoading = dispatch(authOperations.signIn({name: userName, email: userEmail}));
  return (
    <>
      {isLoading && <Loader />}
      {/* {loading && <Loader />} */}
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
