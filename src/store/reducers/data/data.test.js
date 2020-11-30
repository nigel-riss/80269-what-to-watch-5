import {data} from './data.js';
import {ActionType} from '../../actions/actions.js';
import filmsMock from '../../../mocks/films.js';
import reviewsMock from '../../../mocks/reviews.js';


describe(`Data reducer work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(data(void 0, {})).toEqual({
      currentFilm: null,
      favoriteFilms: [],
      films: [],
      promoFilm: null,
      reviews: [],
    });
  });

  it(`Reducer should update current film by load film`, () => {
    expect(data({
      currentFilm: null,
    }, {
      type: ActionType.LOAD_CURRENT_FILM,
      payload: filmsMock[0],
    })).toEqual({
      currentFilm: filmsMock[0],
    });
  });

  it(`Reducer should update favorite films by load films`, () => {
    expect(data({
      favoriteFilms: [],
    }, {
      type: ActionType.LOAD_FAVORITE_FILMS,
      payload: filmsMock.slice(0, 3),
    })).toEqual({
      favoriteFilms: filmsMock.slice(0, 3),
    });
  });

  it(`Reducer should update films by load films`, () => {
    expect(data({
      films: [],
    }, {
      type: ActionType.LOAD_FILMS,
      payload: filmsMock,
    })).toEqual({
      films: filmsMock,
    });
  });

  it(`Reducer should update promo film by load film`, () => {
    expect(data({
      promoFilm: null,
    }, {
      type: ActionType.LOAD_PROMO,
      payload: filmsMock[1],
    })).toEqual({
      promoFilm: filmsMock[1],
    });
  });

  it(`Reducer should update reviews by load reviews`, () => {
    expect(data({
      reviews: [],
    }, {
      type: ActionType.LOAD_REVIEWS,
      payload: reviewsMock,
    })).toEqual({
      reviews: reviewsMock,
    });
  });
});
