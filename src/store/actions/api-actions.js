import {
  ApiRoute,
  AppRoute,
  AuthorizationStatus,
} from '../../const.js';
import {
  loadFilms,
  loadPromo,
  redirectToRoute,
  requireAuthorization,
} from './actions.js';
import {
  parseFilm,
  parseFilms,
} from '../../utils/film-adapter.js';


const checkAuth = () => (dispatch, _getState, api) => {
  api.get(ApiRoute.LOGIN)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {});
};

const fetchFilms = () => (dispatch, _getState, api) => {
  api.get(ApiRoute.FILMS)
    .then(({data}) => dispatch(loadFilms(parseFilms(data))));
};

const fetchPromo = () => (dispatch, _getState, api) => {
  api.get(ApiRoute.PROMO)
    .then(({data}) => dispatch(loadPromo(parseFilm(data))));
};

const login = ({login: email, password}) => (dispatch, _getState, api) => {
  api.post(ApiRoute.LOGIN, {email, password})
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoute.ROOT)))
    .catch(() => {});
};


export {
  checkAuth,
  fetchFilms,
  fetchPromo,
  login,
};
