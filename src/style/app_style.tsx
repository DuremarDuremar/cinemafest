import styled, { createGlobalStyle, keyframes } from "styled-components";

export const Global = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  border: 0;
  user-select: none;
}
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #2f3542;
  ::-webkit-scrollbar {
    width: 10px;
    background-color: #f9f9fd;
}
::-webkit-scrollbar-thumb {
    background-color: #0F2027;
}
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}
a {
  text-decoration: none;
}
ul li {
  list-style: none;
}
button {
  outline: none;
  cursor: pointer;
}
input{
  outline: none;
}
    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
section::-webkit-scrollbar {
    height: 10px;
    background-color: #f9f9fd;
}
section::-webkit-scrollbar-thumb {
    background-color: #0F2027;
}

`;

export const Content = styled.div`
  max-width: 1366px;
  min-height: 100vh;
  margin: 0px auto;
  font-family: "Yatra One", cursive;
  position: relative;
`;

export const rotate = (n: any) => keyframes`
 0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(${n});
    transform: rotate(${n});
  }
`;
