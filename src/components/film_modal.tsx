import React, { FC } from "react";
import { Modal } from "../style/film_style";
import { FrameItemTypes, FrameTypes } from "../types/film";

interface IProps {
  frame: FrameTypes | null;
  modalFrame: number | null;
  setModalFrame: React.Dispatch<React.SetStateAction<number | null>>;
}

const FilmModal: FC<IProps> = ({ modalFrame, setModalFrame, frame }) => {
  return (
    <Modal modalFrame={modalFrame}>
      <i
        className="far fa-times-circle fa-4x"
        onClick={() => setModalFrame(null)}
      ></i>
    </Modal>
  );
};

export default FilmModal;
