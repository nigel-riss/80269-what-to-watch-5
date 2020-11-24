const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
  SELECT_GENRE: `SELECT_GENRE`,
};

const loadFilms = (films) => ({
  type: ActionType.LOAD_FILMS,
  payload: films,
});

const selectGenre = (genre) => ({
  type: ActionType.SELECT_GENRE,
  payload: genre,
});


export {
  ActionType,
  loadFilms,
  selectGenre,
};
