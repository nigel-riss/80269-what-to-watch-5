const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMO: `LOAD_PROMO`,
  SELECT_GENRE: `SELECT_GENRE`,
};

const loadFilms = (films) => ({
  type: ActionType.LOAD_FILMS,
  payload: films,
});

const loadPromo = (promoFilm) => ({
  type: ActionType.LOAD_PROMO,
  payload: promoFilm,
});

const selectGenre = (genre) => ({
  type: ActionType.SELECT_GENRE,
  payload: genre,
});


export {
  ActionType,
  loadFilms,
  loadPromo,
  selectGenre,
};
