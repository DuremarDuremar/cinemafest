import styled from "styled-components";

export const Content = styled.div<{
  respons950: boolean;
}>`
  display: grid;
  grid-template-columns: ${({ respons950 }) =>
    respons950 ? "repeat(3, 1fr)" : "repeat(2, 1fr)"};
  grid-gap: 10px;
  padding: 20px 5px 0;
`;

export const Item = styled.div<{
  respons950: boolean;
}>`
  margin: 0px auto;
  background-color: ${({ respons950 }) => (respons950 ? "#2f3542" : "black")};
  width: 300px;
`;

export const Info = styled.div`
  color: #fff;
  max-width: 300px;

  span {
    &:first-child {
      font-size: 1.4vw;
    }

    &:last-child {
      font-style: italic;
      font-size: 1vw;
    }
  }
`;

export const Image = styled.div`
  img {
    max-height: 400px;
    max-width: 300px;
  }
`;
