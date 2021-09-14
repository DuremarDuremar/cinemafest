import React, { FC } from "react";
import Spinner from "./spinner";
import Cannes from "../assets/Cannes.png";
import Berlin from "../assets/Berlin.png";
import Venice from "../assets/Venice.png";
import Sundance from "../assets/Sundance.png";
import { LoadingFest } from "../style/loading_style";

interface IProps {
  choiceFest: string;
}

const Loading: FC<IProps> = ({ choiceFest }) => {
  return (
    <LoadingFest
      background={
        choiceFest === "Cannes"
          ? Cannes
          : choiceFest === "Berlin"
          ? Berlin
          : choiceFest === "Venice"
          ? Venice
          : Sundance
      }
    >
      <div className="img-fest">
        <Spinner />
      </div>
    </LoadingFest>
  );
};

export default Loading;
