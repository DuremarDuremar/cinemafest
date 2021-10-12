import React, { FC } from "react";
import { Modal, WrapperSlider, Arrow } from "../style/film_modal_style";
import { FrameItemTypes, FrameTypes } from "../types/film";

interface IProps {
  frame: FrameTypes;
  modalFrame: number;
  setModalFrame: React.Dispatch<React.SetStateAction<number | null>>;
}

const FilmModal: FC<IProps> = ({ modalFrame, setModalFrame, frame }) => {
  const arraySlider = [
    ...frame.frames.slice(modalFrame - 1, frame.frames.length),
    ...frame.frames.slice(0, modalFrame - 1),
  ];

  return (
    <Modal modalFrame={modalFrame}>
      <i
        className="far fa-times-circle fa-4x"
        onClick={() => setModalFrame(null)}
      ></i>

      <WrapperSlider {...settings}>
        {arraySlider.map((item: FrameItemTypes, index: number) => {
          return (
            <div key={index}>
              <img src={item.preview} alt={index.toString()} />
            </div>
          );
        })}
      </WrapperSlider>
    </Modal>
  );
};

export default FilmModal;

const settings = {
  className: "",
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  nextArrow: (
    <Arrow>
      <i className="fas fa-arrow-circle-right fa-4x"></i>
    </Arrow>
  ),
  prevArrow: (
    <Arrow left>
      <i className="fas fa-arrow-circle-left fa-4x"></i>
    </Arrow>
  ),
};
