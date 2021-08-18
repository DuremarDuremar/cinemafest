import styled from "styled-components";
import macabre from "../assets/danse-macabre.png";
import logo from "../assets/cinemaLogo.jpg";

export const Content = styled.div`
  display: flex;
  height: 200px;
  /* border-bottom: 2px solid #dfe4ea; */
`;

export const Menu = styled.section<{ respons950: boolean }>`
  flex: 0 0 70%;
  background: url(${macabre});
  background-repeat: no-repeat;
  background-size: ${(props) =>
    props.respons950 ? "calc(180px + 57vw) 320px" : "calc(120px + 47vw) 300px"};
  background-position: ${(props) => (props.respons950 ? "50% 0" : "50% -25%")};
  background-attachment: local;

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
export const Logo = styled.section<{ respons950: boolean }>`
  min-width: 170px;
  flex: 0 0 30%;
  div {
    width: 100%;
    img {
      width: 55px;
      height: 55px;
      z-index: 2;
      background-color: #dfe4ea;
      border-radius: 50%;
      margin: 5px 0 0 5px;
    }
    p {
      color: #dfe4ea;
      font-family: "New Tegomin", serif;
      font-size: calc(15px + 1vw);
      font-style: italic;
      display: inline-block;
      padding-left: 10px;
    }
    &:first-child {
      background: url(${logo});
      background-repeat: no-repeat;
      height: 92%;
      background-size: cover;
    }
    &:last-child {
      background-color: black;
      height: 8%;
    }
  }
`;
