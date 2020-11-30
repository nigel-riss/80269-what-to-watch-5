import {user} from './user.js';
import {ActionType} from '../../actions/actions.js';
import {AuthorizationStatus} from '../../../const.js';


describe(`Data reducer work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(user(void 0, {})).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      userAvatarUrl: ``,
    });
  });

  it(`Reducer should update authorization info by load auth info`, () => {
    expect(user({
      userAvatarUrl: ``,
    }, {
      type: ActionType.LOAD_AUTH_INFO,
      payload: {userAvatarUrl: `http://avatars.com/img.png`},
    })).toEqual({
      userAvatarUrl: `http://avatars.com/img.png`,
    });
  });

  it(`Reducer should update authorization status`, () => {
    expect(user({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    }, {
      type: ActionType.REQUIRE_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    })).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH,
    });
  });
});
