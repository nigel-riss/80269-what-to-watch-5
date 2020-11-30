const ApiRoute = {
  FAVORITE: `/favorite`,
  FILMS: `/films`,
  LOGIN: `/login`,
  PROMO: `/films/promo`,
  REVIEWS: `/comments`,
};

const AppRoute = {
  FILMS: `/films`,
  LOGIN: `/login`,
  MY_LIST: `/mylist`,
  PLAYER: `/player`,
  ROOT: `/`,
};

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const FilmTabName = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`,
};

const FilmCardOption = {
  HEIGHT: 175,
  WIDTH: 280,
  HOVER_DELAY: 1000,
};

const FILMS_SHOWN_PER_CLICK = 8;

const LoginErrorMessage = {
  BAD_AUTH: `We can’t recognize this email
  and password combination. Please try again.`,
  BAD_EMAIL: `Please provide a valid email address.`,
  NO_PASSWORD: `Please enter a password`,
};

const RatingLimit = {
  BAD: 3,
  NORMAL: 5,
  GOOD: 8,
  VERY_GOOD: 10,
};


export {
  ApiRoute,
  AppRoute,
  AuthorizationStatus,
  FilmCardOption,
  FILMS_SHOWN_PER_CLICK,
  FilmTabName,
  LoginErrorMessage,
  RatingLimit,
};
