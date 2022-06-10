import styled from 'styled-components';
export const ContainerSection = styled.div`
  /* position: absolute; */
  display: grid;
  grid-template-columns: auto;
  /* grid-template-rows: 100vh; */
  align-items: center;
  /* grid-template-rows: 80px 300px; */
  /* background-color: #2196f3; */
  @media (min-width: 1280px) {
    grid-template-columns: auto 288px;
    grid-template-rows: auto auto;
    align-items: start;
  }
`;

export const Goal = styled.div`
  width: 100%;
  height: 281px;
  background: #2196f3;
  @media (min-width: 768px) {
    height: 125px;
  }
  @media (min-width: 1280px) {
    height: 332px;
  }
`;
export const BoxGoal = styled.div`
  width: 100%;
  margin: 40px 0 20px 0;
  @media (min-width: 768px) {
    margin: 40px 0 28px 0;
  }
  @media (min-width: 1280px) {
    margin: 0 0 40px 0;
  }
`;
export const UnderGolMyTranny = styled.div`
  @media screen and (min-device-width: 768px) and (max-device-width: 1279px) {
    width: 100%;
    height: 60px;
    background: #5ed3fa;
  }
`;
export const BoxUnderGolMyTranny = styled.div`
  @media screen and (min-device-width: 768px) and (max-device-width: 1279px) {
    margin-bottom: 32px;
  }
`;
export const ContainerCountdown = styled.div`
  @media (min-width: 1280px) {
    /* height: 200px; */
    padding-right: 32px;
    /* margin-bottom: 44px; */
  }
`;
export const CountDown = styled.div`
  background: #c2f367;
  width: 100%;
  height: 261px;
`;
export const Library = styled.div`
  background: teal;
  width: 100%;
  height: 261px;
  /* height: 100vh; */
`;
export const BoxLibrary = styled.div`
  margin-bottom: 32px;
  width: 100%;
  display: table;
  height: auto;
  min-height: 261px;
  @media (min-width: 1280px) {
    padding-right: 32px;
    padding-top: 44px;
    margin-bottom: 39px;
  }
`;
export const DashBoard = styled.div`
  background: #f1de07;
  width: 100%;
  height: 261px;
`;
export const BoxDasboard = styled.div`
  @media (min-width: 1280px) {
    padding-right: 32px;
  }
`;

export const Results = styled.div`
  background: #eb8407;
  width: 100%;
  height: 261px;
  @media (min-width: 1280px) {
    height: 340px;
  }
`;
export const BoxResults = styled.div`
  margin-top: 32px;
  @media (min-width: 768px) {
    margin-top: 40px;
  }
  @media (min-width: 1280px) {
    margin-top: 0;
    /* padding-top: 40px; */
  }
`;
