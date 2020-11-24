import allFilms from '../../../mocks/films.js';
import {ActionType} from '../../action.js';
import {extend} from '../../../utils.js';


const initialState = {
  films: allFilms.slice(),
};


const data = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return extend(state, {
        films: action.payload,
      });
  }

  return state;
};


export {data};
