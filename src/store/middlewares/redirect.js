import history from '../../history.js';
import {ActionType} from '../actions/actions.js';


const redirect = (_store) => (next) => (action) => {
  if (action.type === ActionType.REDIRECT_TO_ROUTE) {
    history.push(action.payload);
  }

  return next(action);
};


export {redirect};
