import styled from 'styled-components';

const bookLibContainer = ({ children }) => {
  return <LibContainer>{children}</LibContainer>;
};

export default bookLibContainer;

export const LibContainer = styled.div`
  position: relative;
  padding: 26px 23px;
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
`;
