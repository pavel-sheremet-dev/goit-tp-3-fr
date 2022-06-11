// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
import Countdown from 'components/Countdown';
import { StyledCountdownContainer } from './CountdownContainer.styled';
import { Loader } from 'components/Loader/Loader';
const nextYear = new Date().getFullYear() + 1;
// axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

// const token =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MjlmOWRkNDg4M2VkNmQ5YTI4M2QxMDUiLCJwZXJtaXNzaW9ucyI6W251bGxdLCJpYXQiOjE2NTQ3OTQ3MjksImV4cCI6MTY1NDg4MTEyOX0.a_XF3Bfh-TP-XHGKN52fZzmteM4jvKXj3j2zE1TQ7fQ';
// axios.defaults.headers.common = { Authorization: `Bearer ${token}` };

// const getDataAsync = async (setDeadline, setIsWaiting) => {
//   try {
//     const res = await axios.get('/api/trainings');
//     const deadline = res.data.deadlineDate;
//     setDeadline(deadline);
//     setIsWaiting(false);
//   } catch (error) {
//     console.log('ERROR GETTING DEADLINE', error);
//   }
// };

// const getDataPromise = (setDeadline, setIsWaiting) => {
//   axios
//     .get('/api/trainings')
//     .then(res => res.data.deadlineDate)
//     .then(deadline => {
//       setDeadline(deadline);
//       setIsWaiting(false);
//     })
//     .catch(error => {
//       console.log('ERROR GETTING DEADLINE', error);
//     });
// };

const CountdownContainer = ({
  isWaiting = false,
  deadline = Date.now() + 10 * 1000 * 24 * 60 * 60,
}) => {
  // const [isWaiting, setIsWaiting] = useState(true);
  // const [deadline, setDeadline] = useState(null);
  // useEffect(() => {
  //   getDataPromise(setDeadline, setIsWaiting);
  // }, []);

  return (
    <>
      {isWaiting && <Loader />}
      {!isWaiting && (
        <StyledCountdownContainer>
          <Countdown
            deadline={new Date(nextYear, 0, 1)}
            title="До закінчення року залишилось"
          />
          <Countdown
            deadline={new Date(deadline)}
            title="До досягнення мети залишилось"
          />
        </StyledCountdownContainer>
      )}
    </>
  );
};

export default CountdownContainer;
