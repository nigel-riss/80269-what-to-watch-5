const ActionType = {
  INCREMENT_ITEMS_SHOWN_COUNT: `INCREMENT_ITEMS_SHOWN_COUNT`,
  LOAD_AUTH_INFO: `LOAD_AUTH_INFO`,
  LOAD_CURRENT_FILM: `LOAD_CURRENT_FILM`,
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMO: `LOAD_PROMO`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  RESET_ITEMS_SHOWN_COUNT: `RESET_ITEMS_SHOWN_COUNT`,
  REQUIRE_AUTHORIZATION: `REQUIRE_AUTHORIZATION`,
  SET_GENRE: `SET_GENRE`,
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

const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});

const resetItemsShownCount = () => ({
  type: ActionType.RESET_ITEMS_SHOWN_COUNT,
});

const requireAuthorization = (status) => ({
  type: ActionType.REQUIRE_AUTHORIZATION,
  payload: status,
});

const setGenre = (genre) => ({
  type: ActionType.SET_GENRE,
  payload: genre,
});


export {
  ActionType,
  incrementItemsShownCount,
  loadAuthInfo,
  loadCurrentFilm,
  loadFilms,
  loadPromo,
  loadReviews,
  redirectToRoute,
  resetItemsShownCount,
  requireAuthorization,
  setGenre,
};
