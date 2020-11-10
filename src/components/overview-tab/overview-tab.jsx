import React from 'react';
import filmType from '../../types/film.js';
import {convertRatingToText} from '../../utils.js';


const OverviewTab = (props) => {
  const {
    film,
  } = props;

  const {
    description,
    details,
    rating,
    votes,
  } = film;

  const {
    director,
    actors,
  } = details;

  return (
    <React.Fragment>
      <div className="movie-rating">
        {/* TODO: Нужно ли менять формат отображения? */}
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{convertRatingToText(rating)}</span>
          <span className="movie-rating__count">{votes} ratings</span>
        </p>
      </div>

      {/* TODO: возможно нужно будет поменять, когда будут актуальные данные */}
      <div className="movie-card__text">
        <p>
          {description}
        </p>

        <p className="movie-card__director">
          <strong>Director: {director}</strong>
        </p>
        <p className="movie-card__starring">
          {/* TODO: возможно поменять форматирование (and for last) */}
          <strong>Starring: {actors.join(`, `)}</strong>
        </p>
      </div>
    </React.Fragment>
  );
};


OverviewTab.propTypes = {
  film: filmType,
};


export default OverviewTab;
