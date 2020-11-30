const ActionType = {
  INCREMENT_ITEMS_SHOWN_COUNT: `INCREMENT_ITEMS_SHOWN_COUNT`,
  LOAD_AUTH_INFO: `LOAD_AUTH_INFO`,
  LOAD_CURRENT_FILM: `LOAD_CURRENT_FILM`,
  LOAD_FAVORITE_FILMS: `LOAD_FAVORITE_FILMS`,
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMO: `LOAD_PROMO`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  LOCK_REVIEW_INPUT: `LOCK_REVIEW_INPUT`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  RESET_ITEMS_SHOWN_COUNT: `RESET_ITEMS_SHOWN_COUNT`,
  RESET_LOGIN_ERROR: `RESET_LOGIN_ERROR`,
  REQUIRE_AUTHORIZATION: `REQUIRE_AUTHORIZATION`,
  SET_GENRE: `SET_GENRE`,
  SET_LOGIN_ERROR: `SET_LOGIN_ERROR`,
  UNLOCK_REVIEW_INPUT: `UNLOCK_REVIEW_INPUT`,
};

const incrementItemsShownCount = (itemsCountShown) => ({
  type: ActionType.INCREMENT_ITEMS_SHOWN_COUNT,
  payload: itemsCountShown,
});

const loadAuthInfo = (authInfo) => ({
  type: ActionType.LOAD_AUTH_INFO,
  payload: authInfo,
});

const loadCurrentFilm = (film) => ({
  type: ActionType.LOAD_CURRENT_FILM,
  payload: film,
});

const loadFavoriteFilms = (films) => ({
  type: ActionType.LOAD_FAVORITE_FILMS,
  payload: films,
});

const loadFilms = (films) => ({
  type: ActionType.LOAD_FILMS,
  payload: films,
});

const loadPromo = (promoFilm) => ({
  type: ActionType.LOAD_PROMO,
  payload: promoFilm,
});

const loadReviews = (reviews) => ({
  type: ActionType.LOAD_REVIEWS,
  payload: reviews,
});

const lockReviewInput = () => ({
  type: ActionType.LOCK_REVIEW_INPUT,
});

const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});

const resetItemsShownCount = () => ({
  type: ActionType.RESET_ITEMS_SHOWN_COUNT,
});

const resetLoginErrorMessage = () => ({
  type: ActionType.RESET_LOGIN_ERROR,
});

const requireAuthorization = (status) => ({
  type: ActionType.REQUIRE_AUTHORIZATION,
  payload: status,
});

const setGenre = (genre) => ({
  type: ActionType.SET_GENRE,
  payload: genre,
});

const setLoginErrorMessage = (message) => ({
  type: ActionType.SET_LOGIN_ERROR,
  payload: message,
});

const unlockReviewInput = () => ({
  type: ActionType.UNLOCK_REVIEW_INPUT,
});


export {
  ActionType,
  incrementItemsShownCount,
  loadAuthInfo,
  loadCurrentFilm,
  loadFavoriteFilms,
  loadFilms,
  loadPromo,
  loadReviews,
  lockReviewInput,
  redirectToRoute,
  resetItemsShownCount,
  resetLoginErrorMessage,
  requireAuthorization,
  setGenre,
  setLoginErrorMessage,
  unlockReviewInput,
};
