import React, { FC } from "react";

import { FrameItemTypes, FrameTypes } from "../types/film";
import { Frames } from "../style/film_style";

interface IProps {
  frame: FrameTypes;
  respons1025: boolean;
}

const FilmFrames: FC<IProps> = ({ frame, respons1025 }) => {
  return (
    <Frames respons1025={respons1025}>
      {frame.frames.slice(0, 8).map((item: FrameItemTypes, index: number) => {
        return (
          <div key={index}>
            <img src={item.preview} alt={index.toString()} />
          </div>
        );
      })}
    </Frames>
  );
};

export default FilmFrames;
