import allFilms from '../mocks/films.js';
import {ActionType} from '../store/action.js';


const initialState = {
  activeFilms: allFilms.slice(),
  films: allFilms.slice(),
  genre: null,
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SELECT_FILMS:
      return state;
    case ActionType.SELECT_GENRE:
      return state;
  }

  return state;
};

export {reducer};