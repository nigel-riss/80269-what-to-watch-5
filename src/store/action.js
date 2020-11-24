const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMO: `LOAD_PROMO`,
  SET_GENRE: `SET_GENRE`,
};

const loadFilms = (films) => ({
  type: ActionType.LOAD_FILMS,
  payload: films,
});

const loadPromo = (promoFilm) => ({
  type: ActionType.LOAD_PROMO,
  payload: promoFilm,
});

const setGenre = (genre) => ({
  type: ActionType.SET_GENRE,
  payload: genre,
});


export {
  ActionType,
  loadFilms,
  loadPromo,
  setGenre,
};
