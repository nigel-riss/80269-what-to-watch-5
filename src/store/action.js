const ActionType = {
  SELECT_GENRE: `SELECT_GENRE`,
};


const selectGenre = (genre) => ({
  type: ActionType.SELECT_GENRE,
  payload: genre,
});


export {
  ActionType,
  selectGenre,
};
