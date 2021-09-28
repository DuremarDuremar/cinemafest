import styled from "styled-components";

export const Content = styled.div`
  padding: 0 5px;
  color: #dfe4ea;
`;

export const Header = styled.div`
  height: 60px;
  button {
    background-color: #dfe4ea;
  }
`;
export const Main = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
`;
export const Image = styled.div`
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
  font-size: 13px;
`;
export const InfoFilm = styled.div`
  div:first-child {
    position: relative;

    &:after {
      content: "";
      width: 70%;
      position: absolute;
      bottom: -50%;
      right: 5%;
      height: 2px;
      display: block;
      background-color: #dfe4ea;
    }
    p:first-child {
      font-size: 16px;
    }
    p:last-child {
      text-align: right;
    }
  }
  div:last-child {
    position: relative;
    margin-top: 50px;
    text-align: center;
    &:after {
      content: "";
      width: 70%;
      position: absolute;
      bottom: -50%;
      left: 5%;
      height: 2px;
      display: block;
      background-color: #dfe4ea;
    }
  }
`;
export const InfoDirector = styled.div`
  margin-top: 50px;
  position: relative;
  img {
    display: block;
    margin: 0px auto;
    max-width: 240px;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
      rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  }
  div {
    position: absolute;
    bottom: 5%;
    left: 10%;
    p:first-child {
      font-size: 16px;
    }
    &:after {
      content: "";
      width: 250%;
      position: absolute;
      bottom: -30%;
      left: 8%;
      height: 2px;
      display: block;
      background-color: #dfe4ea;
    }
  }
`;
export const Frames = styled.div`
  margin: 0px auto;
  max-height: 550px;
  overflow: auto;
  border-top: 6px solid black;
  div {
    position: relative;
    background-color: black;
    img {
      max-width: 100%;
    }
    &:after {
      content: "";
      width: calc(10px + 2vw);
      position: absolute;
      top: 0;
      height: 100%;
      display: block;
      background: linear-gradient(
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
      );
    }
    &:before {
      content: "";
      width: calc(10px + 2vw);
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      display: block;
      background: linear-gradient(
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
      );
    }
  }
  ::-webkit-scrollbar {
    width: 6px;
    background-color: #f9f9fd;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #0f2027;
  }
`;
