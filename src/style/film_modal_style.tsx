import styled from "styled-components";
import Slider from "react-slick";

export const Modal = styled.div<{ modalFrame: number | null }>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgb(47, 53, 66, 0.9);
  z-index: ${(props) => (props.modalFrame ? "1" : "-1")};
  opacity: ${(props) => (props.modalFrame ? "1" : "0")};
  display: flex;
  justify-content: center;
  align-items: center;

  i {
    position: absolute;
    top: 5%;
    right: 5%;
  }
`;
export const Wrapper = styled.div`
  overflow: hidden;
  z-index: -1;
`;
export const WrapperSlider = styled(Slider)`
  width: 100%;

  overflow: hidden;
  .slick-slide {
    width: 100%;
    height: 100%;
    /* border: 1px solid black; */

    img {
      display: block;
      margin: 0px auto;
      width: 70%;
    }
  }
  .slick-track {
    display: flex;
    div {
    }
  }
`;

export const Arrow = styled.div<{ left?: boolean }>`
  width: 40px;
  height: 40px;
  position: absolute;
  left: ${(props) => (props.left ? "4%" : "94.5%")};
  top: 45%;
  cursor: pointer;
  z-index: 1;
`;
