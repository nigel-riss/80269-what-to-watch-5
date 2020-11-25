import React from 'react';
import filmType from '../../types/film.js';


const DetailsTab = (props) => {
  const {
    details,
    genre,
    year,
  } = props.film;

  const {
    actors,
    director,
    length,
  } = details;

  return (
    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">
            Director
          </strong>
          <span className="movie-card__details-value">
            {director}
          </span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">
            Starring
          </strong>
          <span className="movie-card__details-value">
            {actors.map((actor, i, allActors) => {
              return <React.Fragment key={actor + i}>
                {actor}{i + 1 !== allActors.length && `, `}<br/>
              </React.Fragment>;
            })}
          </span>
        </p>
      </div>

      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Run Time</strong>
          <span className="movie-card__details-value">
            {length.hours}h {length.minutes}m
          </span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Genre</strong>
          <span className="movie-card__details-value">
            {genre.map((it, i, genres) => {
              return <React.Fragment key={it + i}>
                {it}{i + 1 !== genres.length && `, `}<br/>
              </React.Fragment>;
            })}
          </span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Released</strong>
          <span className="movie-card__details-value">{year}</span>
        </p>
      </div>
    </div>
  );
};


DetailsTab.propTypes = {
  film: filmType,
};


export default DetailsTab;
