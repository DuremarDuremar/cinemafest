import styled from "styled-components";
import { Link } from "react-router-dom";

export const Image = styled.div`
  position: relative;

  img {
    max-width: 400px;
    display: block;
    margin: 0px auto;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.4) 5px 5px, rgba(0, 0, 0, 0.3) 10px 10px,
      rgba(0, 0, 0, 0.2) 15px 15px, rgba(0, 0, 0, 0.1) 20px 20px,
      rgba(0, 0, 0, 0.05) 25px 25px;
    cursor: pointer;

    :hover ~ .link {
      opacity: 1;
    }
  }
`;

export const LinkImage = styled(Link)<{ next?: string }>`
  transition: all 0.7s ease-in-out;
  position: absolute;
  transform: ${(props) => (props.next ? "rotate(-45deg)" : "rotate(-135deg)")};
  ${(props) =>
    props.next &&
    `
        top: 0;
        right:10%;     
  `};
  ${(props) =>
    !props.next &&
    `
        top:0;
        left: 12%;     
  `};
  opacity: 0;
  box-shadow: 5px 5px 5px 5px #bdc3c7;
  color: #dfe4ea;
  background-color: black;

  :hover {
    opacity: 1;
    cursor: pointer;
  }
`;
