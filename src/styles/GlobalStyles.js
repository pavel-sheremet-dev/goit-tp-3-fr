import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
  color: ${({ theme }) => theme.colors.defaultFont};
  background-color: ${({ theme }) => theme.colors.lightBackground};
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 11pt;
}



/* section {
  outline: 1px solid green;
} */

h1,
h2,
h3,
h4,
h5,
h6,
p,
button,
ul,
ol,
li {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 12pt;
}

ul {
  padding-left: 0;
  list-style: none;
}

img,
svg
 {
  display: block;
}


button {
  border: none;
}

a {
  text-decoration: none;
  color: inherit;
  display: inline-block;
}

.list {
  list-style: none;
}

.isHidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
}

.body-frame {
  position: fixed;
  z-index: -1;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.lightBackground};
  box-shadow: ${({ theme }) => theme.shadows.dashboard};


  @media screen and (min-width: 480px) {
    width: 480px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
}
`;
