import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
`;

export const Content = styled.div<{
  respons730: boolean;
}>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.respons730 ? "repeat(3, 1fr)" : "repeat(2, 1fr)"};
  grid-gap: 10px;
  padding: 20px 5px 0;
`;

export const Item = styled.div<{
  background: any;
  choice: boolean;
  choiceActive: boolean;
}>`
  background-color: black;
  border-radius: 20px 0 0 20px;
  border: 1px solid #dfe4ea;
  cursor: pointer;
  display: flex;
  transform: ${(props) =>
    !props.choice && props.choiceActive
      ? "perspective(750px) translate3d(0px, 0px, -250px) rotateX(27deg) scale(0.9, 0.9)"
      : "perspective(0) translate3d(0px, 0px, 0) rotateX(0) scale(1, 1)"};
  transition: transform 1s ease-out;
  div {
    transition: filter 1.2s ease-out;
    flex: 0 0 80%;
    min-width: 150px;
    min-height: 220px;
    background: url(${(props) => props.background}) no-repeat center center;
    background-size: 100% 100%;
    filter: ${(props) => (props.choice ? "grayscale(0)" : "grayscale(100%)")};
  }

  &:hover {
    border: 1px solid #b8860b;
    transition: all 0.5s ease-out;
  }

  &:hover div {
    filter: grayscale(0);
  }

  p {
    flex: 0 0 20%;
    font-family: "Ubuntu";
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    text-align: center;

    strong {
      color: red;
      font-size: calc(4vw + 10px);
      font-weight: 400;
    }
  }
`;

export const Animation = styled.div<{
  state: any;
  respons950: boolean;
}>`
  transition: 2s;
  transform: translateY(
    ${({ state }) =>
      state === "entering" || state === "entered" ? "0" : "-100%"}
  );
  opacity: ${({ state }) => (state === "entered" ? 1 : 0)};
  pointer-events: ${({ state }) => state !== "entered" && "none"};
  position: absolute;
  min-height: 100vh;
  z-index: 1;
  margin-left: 0.4vw;
  margin-right: 0.4vw;
  left: 0;
  right: 0;
  text-align: center;
  background-color: ${({ respons950 }) => (respons950 ? "black" : "#2f3542")};

  h3 {
    color: red;
    font-size: calc(2.5vw + 8px);
    font-family: "Cantarell";
    position: absolute;
    left: 7%;
    top: 8px;
    transform: rotate(10deg);
  }

  i {
    transition: all 0.8s ease-in-out;
    color: ${({ respons950 }) => (respons950 ? "#2f3542" : "black")};
    cursor: pointer;
    &:hover {
      color: #b8860b;
    }
  }
`;

export const ItemAdap = styled.div`
  text-align: center;
  background-color: black;
  color: #dfe4ea;
  border: 2px solid #dfe4ea;
  height: 40px;
  font-size: 15px;
  line-height: 40px;
  cursor: pointer;
  margin-left: 5px;
  margin-right: 5px;
  transition: all 0.5s ease-out;
  &:not(:first-child) {
    margin-top: 10px;
  }
  &:hover {
    transform: translateX(-10%);
  }
`;
