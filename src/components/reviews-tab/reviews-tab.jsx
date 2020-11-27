import React from 'react';
import PropTypes from 'prop-types';
import reviewType from '../../types/review.js';
import ReviewTabColumn from '../reviews-tab-column/reviews-tab-column.jsx';


const ReviewsTab = (props) => {
  const {reviews} = props;

  return (
    <div className="movie-card__reviews movie-card__row">
      <ReviewTabColumn
        reviews={reviews.slice(0, Math.ceil(reviews.length / 2))}
      />
      <ReviewTabColumn
        reviews={reviews.slice(Math.ceil(reviews.length / 2), reviews.length)}
      />
    </div>
  );
};


ReviewsTab.propTypes = {
  reviews: PropTypes.arrayOf(reviewType).isRequired,
};


export default ReviewsTab;
