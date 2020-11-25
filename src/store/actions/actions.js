const ActionType = {
  INCREMENT_ITEMS_SHOWN_COUNT: `INCREMENT_ITEMS_SHOWN_COUNT`,
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMO: `LOAD_PROMO`,
  RESET_ITEMS_SHOWN_COUNT: `RESET_ITEMS_SHOWN_COUNT`,
  REQUIRE_AUTHORIZATION: `REQUIRE_AUTHORIZATION`,
  SET_GENRE: `SET_GENRE`,
};

const incrementItemsShownCount = (itemsCountShown) => ({
  type: ActionType.INCREMENT_ITEMS_SHOWN_COUNT,
  payload: itemsCountShown,
});

const loadFilms = (films) => ({
  type: ActionType.LOAD_FILMS,
  payload: films,
});

const loadPromo = (promoFilm) => ({
  type: ActionType.LOAD_PROMO,
  payload: promoFilm,
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
  loadFilms,
  loadPromo,
  resetItemsShownCount,
  requireAuthorization,
  setGenre,
};
