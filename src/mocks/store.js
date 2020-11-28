import {NameSpace} from '../store/reducers/root-reducer.js';
import {
  AuthorizationStatus,
  FILMS_SHOWN_PER_CLICK,
} from '../const.js';
import filmsMock from './films.js';
import reviewsMock from './reviews.js';


export default {
  [NameSpace.APP]: {
    itemsShownCount: FILMS_SHOWN_PER_CLICK,
    genre: null,
  },
  [NameSpace.DATA]: {
    currentFilm: filmsMock[0],
    favoriteFilms: filmsMock.slice(0, 4),
    films: filmsMock,
    promoFilm: filmsMock[1],
    reviews: reviewsMock,
  },
  [NameSpace.USER]: {
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    userAvatarUrl: `/img/avatar.png`,
  },
};
