import {ActionType} from '../../action.js';
import {extend} from '../../../utils.js';


const initialState = {
  genre: null,
};


const app = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SELECT_GENRE:
      return extend(state, {
        genre: action.payload,
      });
  }

  return state;
};


export {app};
