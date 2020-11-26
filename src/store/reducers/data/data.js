import {ActionType} from '../../actions/actions.js';
import {extend} from '../../../utils/common.js';


const initialState = {
  films: [],
  promoFilm: null,
};


const data = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return extend(state, {
        films: action.payload,
      });

    case ActionType.LOAD_PROMO:
      return extend(state, {
        promoFilm: action.payload,
      });
  }

  return state;
};


export {data};
