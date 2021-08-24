import styled from "styled-components";

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  padding: 20px 5px 0;
`;

export const Item = styled.div<{ background: any }>`
  background-color: black;
  border-radius: 20px 0 0 20px;
  border: 1px solid #dfe4ea;
  cursor: pointer;
  display: flex;

  div {
    transition: all 1.5s ease-out;
    flex: 0 0 80%;
    min-width: 150px;
    min-height: 220px;
    background: url(${(props) => props.background}) no-repeat center center;
    background-size: 100% 100%;
    filter: grayscale(100%);
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
