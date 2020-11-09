import React from 'react';
import PropTypes from 'prop-types';
import reviewType from '../../types/review.js';


const ReviewsTab = (props) => {
  const {reviews} = props;

  return (
    // TODO: потом надо выстроить это в 2 колонки или переделать css
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {reviews.map((review, i) => {
          const {
            date,
            name,
            rating,
            text,
          } = review;

          return (
            <div
              className="review"
              key={`${name}-${i}`}
            >
              <blockquote className="review__quote">
                <p className="review__text">
                  {text}
                </p>

                <footer className="review__details">
                  <cite className="review__author">
                    {name}
                  </cite>
                  {/* TODO: Форматировать дату, когда будут приходить реальные данные */}
                  <time className="review__date" dateTime={date}>
                    {date}
                  </time>
                </footer>
              </blockquote>

              <div className="review__rating">
                {/* TODO: Нужно ли менять формат отображения? */}
                {rating}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};


ReviewsTab.propTypes = PropTypes.arrayOf(reviewType).isRequired;


export default ReviewsTab;
