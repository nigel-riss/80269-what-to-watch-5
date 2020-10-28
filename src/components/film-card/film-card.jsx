import React from 'react';
import PropTypes from 'prop-types';
import filmType from '../../types/film.js';
import history from '../../history.js';
import VideoPlayer from '../video-player/video-player.jsx';


const HOVER_PLAY_DELAY = 1000;


const FilmCard = (props) => {
  const {
    film,
    onFilmCardHover,
  } = props;

  const {
    cover,
    name,
    preview,
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
        <VideoPlayer
          poster={cover}
          src={preview}
          width={280}
          height={175}
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
