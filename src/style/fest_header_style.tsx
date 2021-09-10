import styled from "styled-components";
import macabre from "../assets/danse-macabre.png";
import logo from "../assets/cinemaLogo.jpg";

export const Content = styled.div`
  display: flex;
  height: 200px;
  padding: 5px 5px 0 5px;
`;

export const Menu = styled.section<{
  respons950: boolean;
  respons730: boolean;
}>`
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
    display: grid;
    grid-template-columns: ${(props) =>
      props.respons730 ? "repeat(4, 1fr)" : "repeat(2, 1fr)"};
    grid-gap: 20px;
    li {
      &:nth-child(-n + 2) {
        ${(props) =>
          !props.respons730 &&
          `
           text-align: right;
        `}
      }
    }
  }
`;

export const Name = styled.li<{ active: boolean; respons950: boolean }>`
  cursor: pointer;
  text-align: center;
  color: ${(props) => (props.active ? "#b8860b" : "#dfe4ea")};
  transition: all 0.4s ease-in-out;
  font-size: ${(props) => (props.respons950 ? "16px" : "20px")};
  &:hover {
    box-shadow: 0px 6px 2px -2px rgba(112, 107, 38, 0.56);
  }
`;

export const Logo = styled.section<{ respons950: boolean }>`
  flex: 0 0 30%;
  div {
    width: 100%;

    img {
      width: 55px;
      height: 55px;
      background-color: #dfe4ea;
      border-radius: 50%;
      margin: 5px 0 0 5px;
    }
    p {
      color: #dfe4ea;
      font-family: "New Tegomin", serif;
      font-size: calc(15px + 1vw);
      font-style: italic;
      display: ${(props) => (props.respons950 ? "inline-block" : "block")};
      padding: ${(props) => (props.respons950 ? "0 0 0 10px" : "10px 0 0 0")};
      text-align: center;
    }
    &:first-child {
      ${(props) =>
        props.respons950 &&
        `
      background: url(${logo});
      background-repeat: no-repeat;
      height: 92%;
      background-size: cover;
      position:relative;
      :before {
      content: "";
      display:block;
      width: 4px;
      height: 100%;
      background-color:black;
      position:absolute;
      transform: rotate(17deg);
      left:-2.1vw;
}
    `}
      ${(props) =>
        !props.respons950 &&
        `
      display:flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      
    `}
    }
    &:last-child {
      background-color: black;
      height: 8%;
      display: ${(props) => (props.respons950 ? "block" : "none")};
    }
  }
`;
