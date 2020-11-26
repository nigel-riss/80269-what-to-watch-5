import {RatingLimit} from '../const.js';


const isLessThen = (number) => (value) => number < value;


const convertRatingToText = (rating) => {
  const isLessThanRating = isLessThen(rating);

  switch (true) {
    case isLessThanRating(RatingLimit.BAD):
      return `Bad`;
    case isLessThanRating(RatingLimit.NORMAL):
      return `Normal`;
    case isLessThanRating(RatingLimit.GOOD):
      return `Good`;
    case isLessThanRating(RatingLimit.VERY_GOOD):
      return `Very Good`;
    default:
      return `Awesome`;
  }
};


const filterFilmsByGenre = (films, genre) => {
  if (!genre) {
    return films;
  }

  return films.filter((film) => film.genre === genre);
};


const formatRating = (rating) => {
  // toFixed
};


const getGenreList = (films) => {
  return films
    .reduce((acc, film) => {
      if (acc.indexOf(film.genre) < 0) {
        acc.push(film.genre);
      }

      return acc;
    }, [])
    .sort();
};


const extend = (a, b) => {
  return Object.assign({}, a, b);
};


export {
  convertRatingToText,
  extend,
  filterFilmsByGenre,
  formatRating,
  getGenreList,
};
