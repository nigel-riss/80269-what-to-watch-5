import React from 'react';
import PropTypes from 'prop-types';
import filmType from '../../types/film.js';
import history from '../../history.js';
import VideoPlayer from '../video-player/video-player.jsx';


const FilmCard = (props) => {
  const {
    film,
    onFilmCardHover,
    onMouseEnter,
    onMouseLeave,
    isHovered,
  } = props;

  const {
    cover,
    name,
    preview,
  } = film;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      style={{backgroundColor: `black`}}
      onMouseEnter={() => {
        onMouseEnter();
        onFilmCardHover(film);
      }}

      onMouseLeave={onMouseLeave}

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
          isPlaying={isHovered}
        />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link">{name}</a>
      </h3>
    </article>
  );
};


FilmCard.propTypes = {
  film: filmType,
  isHovered: PropTypes.bool.isRequired,
  onFilmCardHover: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  // renderPlayer: PropTypes.func,
};


export default FilmCard;
