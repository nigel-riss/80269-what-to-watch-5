import {AuthorizationStatus} from '../../../const.js';
import {ActionType} from '../../actions/actions.js';
import {extend} from '../../../utils/common.js';


const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  userAvatarUrl: ``,
};


const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_AUTH_INFO:
      return extend(state, action.payload);

    case ActionType.REQUIRE_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload,
      });
  }

  return state;
};


export {user};
