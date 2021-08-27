import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchFilms } from "../reducer/actions/filmsA";

interface IProps {
  choiceYear: string;
}

const FestFilms: FC<IProps> = ({ choiceYear }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      fetchFilms(choiceYear);
    }, 400);
  }, [choiceYear]);

  return <div>{choiceYear}</div>;
};

export default FestFilms;
