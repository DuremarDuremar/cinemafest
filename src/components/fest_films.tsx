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
      dispatch(fetchFilms(linkFest));
    }, 400);
  }, [linkFest, dispatch]);

  return <div>{linkFest}</div>;
};

export default FestFilms;
