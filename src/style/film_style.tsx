import styled from "styled-components";
import { respon } from "../variables";

const linearGradientTop = `linear-gradient(
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
)`;

const linearGradientLeft = `linear-gradient(
  to left,
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
)`;

export const Content = styled.div`
  padding: 0 15px;
  color: #dfe4ea;
  position: relative;
`;

export const Header = styled.div`
  height: 60px;
  button {
    background-color: #dfe4ea;
  }
`;
export const Main = styled.div`
  display: grid;
  @media ${respon.smMax} {
    display: block;
  }

  grid-template-columns: repeat(3, 1fr);
  @media ${respon.lgMax} {
    grid-template-columns: repeat(2, 1fr);
  }

  grid-gap: 10px;
  padding-top: 35px;
`;

export const Frames = styled.div`
  margin: 0px auto;
  max-height: 580px;
  overflow: auto;
  border-top: 6px solid black;
  cursor: pointer;

  @media ${respon.lgMax} {
    grid-column: span 2 / auto;
    margin: 30px auto 0;
    display: flex;
    width: calc(100% - 60px);
  }
  div {
    position: relative;
    background-color: black;
    display: flex;

    img {
      max-height: 270px;
      object-fit: contain;
      @media ${respon.lgMin} {
        max-width: 100%;
        margin: 0px auto;
      }
    }
    &:after {
      content: "";
      width: 25px;
      height: 100%;
      @media ${respon.lgMax} {
        width: 100%;
        height: 15px;
      }
      position: absolute;
      top: 0;
      display: block;
      background: ${linearGradientTop};
      @media ${respon.lgMax} {
        background: ${linearGradientLeft};
      }
    }
    &:before {
      content: "";
      width: 25px;
      height: 100%;
      @media ${respon.lgMax} {
        width: 100%;
        height: 15px;
      }

      position: absolute;
      bottom: 0;
      right: 0;
      display: block;
      background: ${linearGradientTop};
      @media ${respon.lgMax} {
        background: ${linearGradientLeft};
      }
    }
  }
  ::-webkit-scrollbar {
    width: 6px;
    height: 8px;
    background-color: #f9f9fd;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #0f2027;
  }
`;
