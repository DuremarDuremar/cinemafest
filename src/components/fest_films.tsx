import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchFilms } from "../reducer/actions/filmsA";

interface IProps {
  linkFest: string;
}

const FestFilms: FC<IProps> = ({ linkFest }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      fetchFilms(linkFest);
    }, 400);
  }, [linkFest]);

  return <div>{linkFest}</div>;
};

export default FestFilms;
