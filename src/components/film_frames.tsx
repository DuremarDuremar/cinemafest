import React, { FC } from "react";

import { FrameItemTypes, FrameTypes } from "../types/film";
import { Frames } from "../style/film_style";

interface IProps {
  frame: FrameTypes;
  respons1025: boolean;
  setModalFrame: React.Dispatch<React.SetStateAction<number | null>>;
}

const FilmFrames: FC<IProps> = ({ frame, respons1025, setModalFrame }) => {
  return (
    <Frames respons1025={respons1025}>
      {frame.frames.slice(0, 8).map((item: FrameItemTypes, index: number) => {
        return (
          <div key={index} onClick={() => setModalFrame(index + 1)}>
            <img src={item.preview} alt={index.toString()} />
          </div>
        );
      })}
    </Frames>
  );
};

export default FilmFrames;
