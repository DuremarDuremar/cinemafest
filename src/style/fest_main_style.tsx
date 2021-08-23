import styled from "styled-components";

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  padding: 20px 5px 0;
`;

export const Item = styled.div`
  min-width: 150px;
  min-height: 100px;
  background-color: yellow;

  img {
    display: block;
    width: 40%;
    height: 100%;
    border-radius: 50%;
    opacity: 0.7;
    margin: 0px auto;
  }
`;
