import React from 'react';
import PropTypes from 'prop-types';
import {formatRating} from '../../utils/common.js';


const Comment = (props) => {
  const {
    date,
    name,
    rating,
    text,
  } = props;

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{text}</p>

        <footer className="review__details">
          <cite className="review__author">{name}</cite>
          <time className="review__date" dateTime={date}>
            {/* TODO: Форматировать дату, когда будут приходить реальные данные */}
            {date}
          </time>
        </footer>
      </blockquote>

      <div className="review__rating">
        {formatRating(rating)}
      </div>
    </div>
  );
};


Comment.propTypes = {
  date: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};


export default Comment;
