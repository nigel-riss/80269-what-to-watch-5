import React from 'react';
import PropTypes from 'prop-types';
import filmType from '../../types/film.js';
import history from '../../history.js';
import {
  AppRoute,
  FilmCardOption
} from '../../const.js';

const FilmCard = (props) => {
  const {
    film,
    isHovered,
    onMouseEnter,
    onMouseLeave,
    renderVideo,
  } = props;

  const {
    id,
    backgroundColor,
    name,
    preview,
    previewImage,
  } = film;


  return (
    <article
      className="small-movie-card catalog__movies-card"
      style={{backgroundColor: `${backgroundColor}`}}
      onMouseEnter={() => {
        onMouseEnter();
      }}

      onMouseLeave={onMouseLeave}

      onClick={() => {
        history.push(`${AppRoute.FILMS}/${id}`);
      }}
    >
      <div className="small-movie-card__image">
        {renderVideo({
          src: preview,
          poster: previewImage,
          height: FilmCardOption.HEIGHT,
          width: FilmCardOption.WIDTH,
          isPlaying: isHovered,
        })}
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
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  renderVideo: PropTypes.func.isRequired,
};


export default FilmCard;
