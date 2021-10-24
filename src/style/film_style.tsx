import styled from "styled-components";

const linearGradientTop = `linear-gradient(
  to top,
  black 10%,
  #fff 10% 20%,
  black 20% 30%,
  #fff 30% 40%,
  black 40% 50%,
  #fff 50% 60%,
  black 60% 70%,
  #fff 70% 80%,
  black 80% 90%,
  #fff 90% 100%
)`;

const linearGradientLeft = `linear-gradient(
  to left,
  black 10%,
  #fff 10% 20%,
  black 20% 30%,
  #fff 30% 40%,
  black 40% 50%,
  #fff 50% 60%,
  black 60% 70%,
  #fff 70% 80%,
  black 80% 90%,
  #fff 90% 100%
)`;

export const Content = styled.div`
  padding: 0 15px;
  color: #dfe4ea;
  position: relative;
`;

export const Header = styled.div`
  height: 60px;
  button {
    background-color: #dfe4ea;
  }
`;
export const Main = styled.div<{ respons1025: boolean; respons730: boolean }>`
  display: ${(props) => (props.respons730 ? "grid" : "block")};
  grid-template-columns: ${(props) =>
    props.respons1025 ? "repeat(3, 1fr)" : "repeat(2, 1fr)"};
  grid-gap: 10px;
  padding-top: 35px;
`;

export const Frames = styled.div<{ respons1025: boolean }>`
  margin: 0px auto;
  max-height: 580px;
  overflow: auto;
  border-top: 6px solid black;
  cursor: pointer;

  ${(props) =>
    !props.respons1025 &&
    `
    grid-column: span 2 / auto; 
    margin: 30px auto 0;
    display:flex;
    width: calc(100% - 60px);
  `};
  div {
    position: relative;
    background-color: black;
    display: flex;

    img {
      max-height: 100%;
      object-fit: contain;
      ${(props) =>
        props.respons1025 &&
        `
       max-width: 100%;
      
    `};
    }
    &:after {
      content: "";
      width: ${(props) => (props.respons1025 ? "25px" : "100%")};
      height: ${(props) => (props.respons1025 ? "100%" : "15px")};
      position: absolute;
      top: 0;
      display: block;
      background: ${(props) =>
        props.respons1025 ? linearGradientTop : linearGradientLeft};
    }
    &:before {
      content: "";
      width: ${(props) => (props.respons1025 ? "25px" : "100%")};
      height: ${(props) => (props.respons1025 ? "100%" : "15px")};
      position: absolute;
      bottom: 0;
      right: 0;
      display: block;
      background: ${(props) =>
        props.respons1025 ? linearGradientTop : linearGradientLeft};
    }
  }
  ::-webkit-scrollbar {
    width: 6px;
    height: 8px;
    background-color: #f9f9fd;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #0f2027;
  }
`;
