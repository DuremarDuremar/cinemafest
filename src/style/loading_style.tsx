import styled from "styled-components";

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
