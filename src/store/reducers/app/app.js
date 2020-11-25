import {ActionType} from '../../action.js';
import {extend} from '../../../utils/common.js';
import {FILMS_SHOWN_PER_CLICK} from '../../../const.js';


const initialState = {
  itemsShownCount: FILMS_SHOWN_PER_CLICK,
  genre: null,
};


const app = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.RESET_ITEMS_SHOWN_COUNT:
      return extend(state, {
        itemsShownCount: FILMS_SHOWN_PER_CLICK,
      });

    case ActionType.INCREMENT_ITEMS_SHOWN_COUNT:
      return extend(state, {
        itemsShownCount: state.itemsShownCount + FILMS_SHOWN_PER_CLICK,
      });

    case ActionType.SET_GENRE:
      return extend(state, {
        genre: action.payload,
      });
  }

  return state;
};


export {app};
