import React from 'react';
import PropTypes from 'prop-types';
import reviewType from '../../types/review.js';
import Comment from '../comment/comment.jsx';


const ReviewTabColumn = (props) => {
  const {reviews} = props;

  return (
    <div className="movie-card__reviews-col">
      {reviews.map((review, i) => {
        return (
          <Comment
            key={`${review.name}-${i}`}
            date={review.date}
            name={review.name}
            rating={review.rating}
            text={review.text}
          />
        );
      })}
    </div>
  );
};


ReviewTabColumn.propTypes = {
  reviews: PropTypes.arrayOf(reviewType).isRequired,
};


export default ReviewTabColumn;
