import allFilms from '../mocks/films.js';
import {ActionType} from '../store/action.js';
import {
  extend,
  filterFilmsByGenre,
} from '../utils.js';


const initialState = {
  activeFilms: allFilms.slice(),
  films: allFilms.slice(),
  genre: null,
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SELECT_FILMS:
      return extend(state, {
        activeFilms: filterFilmsByGenre(state.films, action.payload),
      });
    case ActionType.SELECT_GENRE:
      return extend(state, {
        genre: action.payload,
      });
  }

  return state;
};

export {reducer};
