import styled from "styled-components";
import Slider from "react-slick";

export const Modal = styled.div<{ modalFrame: number | null }>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #2f3542;
  z-index: ${(props) => (props.modalFrame ? "1" : "-1")};
  opacity: ${(props) => (props.modalFrame ? "1" : "0")};

  i {
    position: absolute;
    top: 5%;
    right: 5%;
  }
`;

export const WrapperSlider = styled(Slider)`
  width: 100%;
  overflow: hidden;
  .slick-slide {
    width: 296px;
    height: 222px;
  }
  .slick-track {
    display: flex;
  }
`;
