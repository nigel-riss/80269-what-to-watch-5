import React from 'react';
import filmTypes from '../../types/film.js';


const FilmCard = (props) => {
  const {
    cover,
    name,
  } = props.film;

  return (
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img
          src={cover}
          alt={name}
          width="280"
          height="175"
        />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{name}</a>
      </h3>
    </article>
  );
};


FilmCard.propTypes = filmTypes;


export default FilmCard;
