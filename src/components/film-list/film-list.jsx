import React from 'react';
import filmTypes from '../../types/film.js';
import FilmCard from '../film-card/film-card.jsx';


const FilmList = (props) => {
  const {
    films,
  } = props;

  return (
    <div className="catalog__movies-list">
      {films.map((film, i) => <FilmCard
        key={film.name + i}
        film={film}
      />)}
    </div>
  );
};


FilmList.propTypes = filmTypes;


export default FilmList;
