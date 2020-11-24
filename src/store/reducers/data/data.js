import {ActionType} from '../../action.js';
import {extend} from '../../../utils/common.js';


const initialState = {
  films: [],
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
