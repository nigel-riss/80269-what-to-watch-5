const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMO: `LOAD_PROMO`,
  REINCREMENT_ITEMS_SHOWN_COUNT: `REINCREMENT_ITEMS_SHOWN_COUNT`,
  SET_GENRE: `SET_GENRE`,
  INCREMENT_ITEMS_SHOWN_COUNT: `INCREMENT_ITEMS_SHOWN_COUNT`,
};

const loadFilms = (films) => ({
  type: ActionType.LOAD_FILMS,
  payload: films,
});

const loadPromo = (promoFilm) => ({
  type: ActionType.LOAD_PROMO,
  payload: promoFilm,
});


const resetItemsShownCount = () => ({
  type: ActionType.REINCREMENT_ITEMS_SHOWN_COUNT,
});

const incrementItemsShownCount = (itemsCountShown) => ({
  type: ActionType.INCREMENT_ITEMS_SHOWN_COUNT,
  payload: itemsCountShown,
});

const setGenre = (genre) => ({
  type: ActionType.SET_GENRE,
  payload: genre,
});


export {
  ActionType,
  loadFilms,
  loadPromo,
  resetItemsShownCount,
  incrementItemsShownCount,
  setGenre,
};
