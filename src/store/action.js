const ActionType = {
  SELECT_GENRE: `SELECT_GENRE`,
};


const ActionCreator = {
  selectGenre: (genre) => ({
    type: ActionType.SELECT_GENRE,
    payload: genre,
  }),
};


export {
  ActionCreator,
  ActionType,
};
