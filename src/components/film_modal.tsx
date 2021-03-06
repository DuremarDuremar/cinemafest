import React, { FC } from "react";

import {
  Modal,
  Wrapper,
  WrapperSlider,
  Arrow,
} from "../style/film_modal_style";
import { FrameItemTypes, FrameTypes } from "../types/film";

interface IProps {
  frame: FrameTypes;
  modalFrame: number;
  setModalFrame: React.Dispatch<React.SetStateAction<number | null>>;
  respons730: boolean;
}

const FilmModal: FC<IProps> = ({
  modalFrame,
  setModalFrame,
  frame,
  respons730,
}) => {
  const settings = {
    className: "",
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: respons730 ? true : false,
    nextArrow: (
      <Arrow>
        <i className="fas fa-arrow-circle-right fa-2x"></i>
      </Arrow>
    ),
    prevArrow: (
      <Arrow left>
        <i className="fas fa-arrow-circle-left fa-2x"></i>
      </Arrow>
    ),
  };

  const arraySlider = [
    ...frame.frames.slice(modalFrame - 1, frame.frames.length),
    ...frame.frames.slice(0, modalFrame - 1),
  ];

  return (
    <Modal modalFrame={modalFrame} onClick={() => setModalFrame(null)}>
      <i
        className="far fa-times-circle fa-4x"
        onClick={() => setModalFrame(null)}
      ></i>

      <Wrapper onClick={(e) => e.stopPropagation()}>
        <WrapperSlider {...settings}>
          {arraySlider.map((item: FrameItemTypes, index: number) => {
            return (
              <div key={index}>
                <img src={item.preview} alt={index.toString()} />
              </div>
            );
          })}
        </WrapperSlider>
      </Wrapper>
    </Modal>
  );
};

export default FilmModal;
