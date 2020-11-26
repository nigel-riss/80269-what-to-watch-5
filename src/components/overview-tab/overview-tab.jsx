import React from 'react';
import filmType from '../../types/film.js';
import {convertRatingToText} from '../../utils/common.js';


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
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{convertRatingToText(rating)}</span>
          <span className="movie-rating__count">{votes} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>
          {description}
        </p>

        <p className="movie-card__director">
          <strong>Director: {director}</strong>
        </p>
        <p className="movie-card__starring">
          <strong>Starring: {actors.join(`, `)} and other</strong>
        </p>
      </div>
    </React.Fragment>
  );
};


OverviewTab.propTypes = {
  film: filmType,
};


export default OverviewTab;
