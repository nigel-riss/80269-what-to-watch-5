import React from 'react';


const ReviewsTab = (props) => {
  const {reviews} = props;

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {reviews.map((review, i) => {
          const {
            rating,
            text,
            name,
            date,
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
                  <time className="review__date" dateTime={date}>
                    {date}
                  </time>
                </footer>
              </blockquote>

              <div className="review__rating">
                {rating}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};


export default ReviewsTab;
