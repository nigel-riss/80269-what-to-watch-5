import {
  ApiRoute,
  AppRoute,
  AuthorizationStatus,
} from '../../const.js';
import {
  loadAuthInfo,
  loadCurrentFilm,
  loadFilms,
  loadPromo,
  redirectToRoute,
  requireAuthorization,
} from './actions.js';
import {parseAuth} from '../../utils/auth-adapter';
import {
  parseFilm,
  parseFilms,
} from '../../utils/film-adapter.js';


const checkAuth = () => (dispatch, _getState, api) => {
  api.get(ApiRoute.LOGIN)
    .then(({data}) => {
      dispatch(loadAuthInfo(parseAuth(data)));
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
    })
    .catch(() => {
      dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
    });
};

const fetchCurrentFilm = (id) => (dispatch, _getState, api) => {
  api.get(`${AppRoute.FILMS}/${id}`)
    .then(({data}) => {
      dispatch(loadCurrentFilm(parseFilm(data)));
    })
    .catch(() => {
      throw Error(`Film load error`);
    });
};

const fetchFilms = () => (dispatch, _getState, api) => {
  api.get(ApiRoute.FILMS)
    .then(({data}) => {
      dispatch(loadFilms(parseFilms(data)));
    })
    .catch(() => {
      throw Error(`Films load error`);
    });
};

const fetchPromo = () => (dispatch, _getState, api) => {
  api.get(ApiRoute.PROMO)
    .then(({data}) => {
      dispatch(loadPromo(parseFilm(data)));
    })
    .catch(() => {
      throw Error(`Promo film load error`);
    });
};

const login = ({login: email, password}) => (dispatch, _getState, api) => {
  api.post(ApiRoute.LOGIN, {email, password})
    .then((response) => {
      dispatch(loadAuthInfo(parseAuth(response.data)));
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
    })
    .then(() => dispatch(redirectToRoute(AppRoute.ROOT)))
    .catch(() => {
      dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
    });
};


export {
  checkAuth,
  fetchCurrentFilm,
  fetchFilms,
  fetchPromo,
  login,
};
