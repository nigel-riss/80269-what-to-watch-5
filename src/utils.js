import {RatingLimits} from './const.js';


const isLessThen = (number) => (value) => number < value;

const convertRatingToText = (rating) => {
  const isLessThanRating = isLessThen(rating);

  switch (true) {
    case isLessThanRating(RatingLimits.BAD):
      return `Bad`;
    case isLessThanRating(RatingLimits.NORMAL):
      return `Normal`;
    case isLessThanRating(RatingLimits.GOOD):
      return `Good`;
    case isLessThanRating(RatingLimits.VERY_GOOD):
      return `Very Good`;
    default:
      return `Awesome`;
  }
};


export {
  convertRatingToText,
};
