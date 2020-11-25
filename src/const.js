const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const FilmTabName = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`,
};

const RatingLimit = {
  BAD: 3,
  NORMAL: 5,
  GOOD: 8,
  VERY_GOOD: 10,
};

const FilmCardOption = {
  HEIGHT: 175,
  WIDTH: 280,
  HOVER_DELAY: 1000,
};

const FILMS_SHOWN_PER_CLICK = 8;

export {
  AuthorizationStatus,
  FilmCardOption,
  FILMS_SHOWN_PER_CLICK,
  FilmTabName,
  RatingLimit,
};
