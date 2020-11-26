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

  return films.filter((film) => {
    return film.genre.some((filmGenre) => {
      return filmGenre === genre;
    });
  });
};


const getGenreList = (films) => {
  return films
    .reduce((acc, film) => {
      film.genre.forEach((genre) => {
        if (acc.indexOf(genre) < 0) {
          acc.push(genre);
        }
      });

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
  getGenreList,
};
