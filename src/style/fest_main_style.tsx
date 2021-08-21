import styled from "styled-components";

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
`;

export const Item = styled.div`
  min-width: 150px;
  min-height: 100px;
  background-color: #fff;
`;
