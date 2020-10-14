import React from 'react';
import PropTypes from 'prop-types';
import filmType from '../../types/film.js';
import history from '../../history.js';


const FilmCard = (props) => {
  const {
    film,
    onFilmCardHover,
  } = props;

  const {
    cover,
    name,
  } = film;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseOver={() => {
        onFilmCardHover(film);
      }}
      onClick={() => {
        history.push(`/films/1`);
      }}
    >
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


FilmCard.propTypes = {
  film: filmType,
  onFilmCardHover: PropTypes.func.isRequired,
};


export default FilmCard;
