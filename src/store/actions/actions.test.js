import {
  ActionType,
  incrementItemsShownCount,
  loadAuthInfo,
  loadCurrentFilm,
  loadFavoriteFilms,
  loadFilms,
  loadPromo,
  loadReviews,
  lockReviewInput,
  redirectToRoute,
  resetItemsShownCount,
  requireAuthorization,
  setGenre,
  unlockReviewInput,
} from './actions.js';
import filmsMock from '../../mocks/films.js';
import reviewsMock from '../../mocks/reviews.js';
import {
  AppRoute,
  AuthorizationStatus,
} from '../../const.js';


describe(`Action creators work correctly`, () => {
  it(`Action creator for incrementing shown items count returns correct action`, () => {
    expect(incrementItemsShownCount(8)).toEqual({
      type: ActionType.INCREMENT_ITEMS_SHOWN_COUNT,
      payload: 8,
    });
  });

  it(`Action creator for loading Authorizationd info returns correct action`, () => {
    expect(loadAuthInfo({
      avatarUrl: `http://avatars.com/img.png`,
    })).toEqual({
      type: ActionType.LOAD_AUTH_INFO,
      payload: {
        avatarUrl: `http://avatars.com/img.png`,
      },
    });
  });

  it(`Action creator for loading current film returns correct action`, () => {
    expect(loadCurrentFilm(filmsMock[0])).toEqual({
      type: ActionType.LOAD_CURRENT_FILM,
      payload: filmsMock[0],
    });
  });

  it(`Action creator for loading favorite films returns correct action`, () => {
    expect(loadFavoriteFilms(filmsMock.slice(0, 3))).toEqual({
      type: ActionType.LOAD_FAVORITE_FILMS,
      payload: filmsMock.slice(0, 3),
    });
  });

  it(`Action creator for loading films returns correct action`, () => {
    expect(loadFilms(filmsMock)).toEqual({
      type: ActionType.LOAD_FILMS,
      payload: filmsMock,
    });
  });

  it(`Action creator for loading promo film returns correct action`, () => {
    expect(loadPromo(filmsMock[1])).toEqual({
      type: ActionType.LOAD_PROMO,
      payload: filmsMock[1],
    });
  });

  it(`Action creator for loading reviews returns correct action`, () => {
    expect(loadReviews(reviewsMock)).toEqual({
      type: ActionType.LOAD_REVIEWS,
      payload: reviewsMock,
    });
  });

  it(`Action creator for locking review input returns correct action`, () => {
    expect(lockReviewInput()).toEqual({
      type: ActionType.LOCK_REVIEW_INPUT,
    });
  });

  it(`Action creator for redirecting to route returns correct action`, () => {
    expect(redirectToRoute(AppRoute.MY_LIST)).toEqual({
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: AppRoute.MY_LIST,
    });
  });

  it(`Action creator for reseting shown items count returns correct action`, () => {
    expect(resetItemsShownCount()).toEqual({
      type: ActionType.RESET_ITEMS_SHOWN_COUNT,
    });
  });

  it(`Action creator for requiring authorization status returns correct action`, () => {
    expect(requireAuthorization(AuthorizationStatus.AUTH)).toEqual({
      type: ActionType.REQUIRE_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    });
  });

  it(`Action creator for setting active genre returns correct action`, () => {
    expect(setGenre(`Action`)).toEqual({
      type: ActionType.SET_GENRE,
      payload: `Action`,
    });
  });

  it(`Action creator for unlocking review input returns correct action`, () => {
    expect(unlockReviewInput()).toEqual({
      type: ActionType.UNLOCK_REVIEW_INPUT,
    });
  });
});
