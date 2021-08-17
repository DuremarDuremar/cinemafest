import styled from "styled-components";
import macabre from "../assets/danse-macabre.png";
import logo from "../assets/cinemaLogo.jpg";

export const Content = styled.div`
  display: flex;
  height: 200px;
  border-bottom: 2px solid #dfe4ea;
`;

export const Menu = styled.section`
  flex: 0 0 70%;
  background: url(${macabre});
  background-repeat: no-repeat;
  background-size: calc(180px + 57vw) 320px;
  background-attachment: local;
  background-position: 50% 0;

  ul {
    padding-top: 40px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    li {
      cursor: pointer;
      color: #dfe4ea;
    }
  }
`;
export const Logo = styled.section`
  flex: 0 0 30%;

  div {
    width: 100%;

    &:first-child {
      background: url(${logo});
      background-repeat: no-repeat;
      height: 90%;
      background-size: cover;
    }
    &:last-child {
      background-color: black;
      height: 10%;
    }
  }
`;
