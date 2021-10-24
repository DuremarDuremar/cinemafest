import styled from "styled-components";
import { Link } from "react-router-dom";

export const Info = styled.div<{
  respons730: boolean;
  backgroundPoster: string | null;
}>`
  background-repeat: no-repeat;
  background-image: linear-gradient(to right, rgb(47, 53, 66, 0.8) 0 100%),
    url(${(props) => props.backgroundPoster});
  background-size: cover;
  font-size: 13px;
`;

export const InfoFilm = styled.div`
  padding: 0 30px;
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
      font-size: 18px;
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

  i {
    position: absolute;
    cursor: pointer;
    z-index: 1;
  }

  .fa-arrow-alt-circle-left {
    left: 5%;
  }
  .fa-arrow-alt-circle-right {
    right: 5%;
  }
`;

export const Wrapper = styled.div`
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
    background: rgb(15, 32, 39, 0.6);
    p:first-child {
      font-size: 16px;
    }
    &:after {
      content: "";
      width: 25vw;
      position: absolute;
      bottom: -30%;
      left: 8%;
      height: 2px;
      display: block;
      background-color: #dfe4ea;
    }
  }
`;

export const Exit = styled(Link)`
  &:hover img {
    background-color: black;
    box-shadow: 10px 5px 5px #dfe4ea;
    transition: all 0.6s ease-in-out;
  }
  img {
    width: 65px;
    height: 65px;
    background-color: #dfe4ea;
    border-radius: 50%;
    display: block;
    margin: 0px auto;
    cursor: pointer;
  }
`;

export const Arrow = styled(Link)`
  color: #fff;
`;
