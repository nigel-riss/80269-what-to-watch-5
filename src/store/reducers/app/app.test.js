import {app} from './app.js';
import {ActionType} from '../../actions/actions.js';
import {FILMS_SHOWN_PER_CLICK} from '../../../const.js';


describe(`App reducer work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(app(void 0, {})).toEqual({
      isReviewInputLocked: false,
      itemsShownCount: FILMS_SHOWN_PER_CLICK,
      genre: null,
      loginErrorMessage: ``,
    });
  });

  it(`Reducer should increment shown items count by FILMS_SHOWN_PER_CLICK (8)`, () => {
    expect(app({
      itemsShownCount: 0,
    }, {
      type: ActionType.INCREMENT_ITEMS_SHOWN_COUNT,
    })).toEqual({
      itemsShownCount: FILMS_SHOWN_PER_CLICK,
    });
  });

  it(`Reducer should set isReviewInputLocked to true`, () => {
    expect(app({
      isReviewInputLocked: false,
    }, {
      type: ActionType.LOCK_REVIEW_INPUT,
    })).toEqual({
      isReviewInputLocked: true,
    });
  });

  it(`Reducer should reset shown items count to FILMS_SHOWN_PER_CLICK`, () => {
    expect(app({
      itemsShownCount: 24,
    }, {
      type: ActionType.RESET_ITEMS_SHOWN_COUNT,
    })).toEqual({
      itemsShownCount: FILMS_SHOWN_PER_CLICK,
    });
  });

  it(`Reducer should reset login error message`, () => {
    expect(app({
      loginErrorMessage: `Error message`,
    }, {
      type: ActionType.RESET_LOGIN_ERROR,
      payload: `Action`,
    })).toEqual({
      loginErrorMessage: ``,
    });
  });

  it(`Reducer should set genre to a given value`, () => {
    expect(app({
      genre: `Comedy`,
    }, {
      type: ActionType.SET_GENRE,
      payload: `Action`,
    })).toEqual({
      genre: `Action`,
    });
  });

  it(`Reducer should set login error message to a given value`, () => {
    expect(app({
      loginErrorMessage: ``,
    }, {
      type: ActionType.SET_LOGIN_ERROR,
      payload: `Error message`,
    })).toEqual({
      loginErrorMessage: `Error message`,
    });
  });

  it(`Reducer should set isReviewInputLocked to false`, () => {
    expect(app({
      isReviewInputLocked: true,
    }, {
      type: ActionType.UNLOCK_REVIEW_INPUT,
    })).toEqual({
      isReviewInputLocked: false,
    });
  });
});
