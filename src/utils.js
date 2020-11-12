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


const filterFilmsByGenre = (films, genre) => {
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


export {
  convertRatingToText,
  filterFilmsByGenre,
  getGenreList,
};
