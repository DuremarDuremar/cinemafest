import styled from "styled-components";

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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
      font-size: 4vw;
      font-weight: 400;
    }
  }
`;

export const LoadingFest = styled.div<{
  background: any;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 5px 0;
  .img-fest {
    width: 230px;
    height: 200px;
    background: url(${(props) => props.background}) no-repeat center center;
    background-size: contain;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
