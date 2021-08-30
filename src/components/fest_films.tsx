import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { fetchFilms } from "../reducer/actions/filmsA";

interface IProps {
  linkFest: string;
}

const FestFilms: FC<IProps> = ({ linkFest }) => {
  const dispatch = useDispatch();

  const { data } = useTypeSelector((state) => state.films);

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchFilms(linkFest, 0));
    }, 400);
  }, [linkFest, dispatch]);

  const render = () => {
    return (
      <div>
        {data.map((item, index) => (
          <span key={index}>{item.filmId}</span>
        ))}
      </div>
    );
  };

  return data.length ? render() : <div>{linkFest}</div>;
};

export default FestFilms;
