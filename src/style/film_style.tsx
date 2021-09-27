import styled from "styled-components";

export const Content = styled.div`
  padding: 0 5px;
`;

export const Header = styled.div`
  height: 60px;
  button {
    background-color: #dfe4ea;
  }
`;
export const Main = styled.div`
  display: flex;
`;
export const Image = styled.div`
  flex: 0 0 40%;
  border-right: 2px solid black;

  img {
    max-width: 400px;
    display: block;
    margin: 0px auto;
    box-shadow: rgba(0, 0, 0, 0.4) 5px 5px, rgba(0, 0, 0, 0.3) 10px 10px,
      rgba(0, 0, 0, 0.2) 15px 15px, rgba(0, 0, 0, 0.1) 20px 20px,
      rgba(0, 0, 0, 0.05) 25px 25px;
  }
`;
export const Info = styled.div`
  flex: 0 0 30%;
`;
export const InfoFilm = styled.div`
  div:first-child {
    &:after {
      content: "";
      width: 100%;
      /* position: absolute; */
      bottom: -50%;
      left: 20%;
      height: 2px;
      display: block;
      background-color: #dfe4ea;
    }
  }
`;
export const InfoDirector = styled.div``;
export const Frames = styled.div`
  flex: 0 0 30%;
`;
