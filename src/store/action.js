const ActionType = {
  SELECT_GENRE: `SELECT_GENRE`,
  SELECT_FILMS: `SELECT_FILMS`,
};


const ActionCreator = {
  selectGenre: (genre) => ({
    type: ActionType.SELECT_GENRE,
    payload: genre,
  }),

  selectFilms: (films) => ({
    type: ActionType.SELECT_FILMS,
    payload: films,
  }),
};


export {
  ActionCreator,
  ActionType,
};
