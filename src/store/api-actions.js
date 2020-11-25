import {AuthorizationStatus} from '../const.js';
import {
  loadFilms,
  loadPromo,
  requireAuthorization,
} from './action.js';
import {
  parseFilm,
  parseFilms,
} from '../utils/film-adapter.js';


const checkAuth = () => (dispatch, _getState, api) => {
  api.get(`/login`)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.Auth)))
    .catch(() => {});
};

const fetchFilms = () => (dispatch, _getState, api) => {
  api.get(`/films`)
    .then(({data}) => dispatch(loadFilms(parseFilms(data))));
};

const fetchPromo = () => (dispatch, _getState, api) => {
  api.get(`/films/promo`)
    .then(({data}) => dispatch(loadPromo(parseFilm(data))));
};

const login = ({login: email, password}) => (dispatch, _getState, api) => {
  api.post(`/login`, {email, password})
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.Auth)))
    .catch(() => {});
};


export {
  checkAuth,
  fetchFilms,
  fetchPromo,
  login,
};
