import {
  ApiRoute,
  AppRoute,
  AuthorizationStatus,
} from '../../const.js';
import {
  loadAuthInfo,
  loadCurrentFilm,
  loadFavoriteFilms,
  loadFilms,
  loadPromo,
  loadReviews,
  redirectToRoute,
  requireAuthorization,
  unlockReviewInput,
} from './actions.js';
import {parseAuth} from '../../utils/auth-adapter';
import {parseComments} from '../../utils/comment-adapter';
import {
  parseFilm,
  parseFilms,
} from '../../utils/film-adapter.js';


const postReview = (id, rating, comment) => (dispatch, _getState, api) => {
  api.post(`${ApiRoute.REVIEWS}/${id}`, {rating, comment})
    .then(() => {
      dispatch(redirectToRoute(`${AppRoute.FILMS}/${id}`));
      dispatch(unlockReviewInput());
    })
    .catch((err) => {
      throw Error(`Failed to add a review: ${err.message}`);
    });
};

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
  api.get(`${ApiRoute.FILMS}/${id}`)
    .then(({data}) => {
      dispatch(loadCurrentFilm(parseFilm(data)));
    })
    .catch((err) => {
      throw Error(`Film load error: ${err.message}`);
    });
};

const fetchFavoriteFilms = () => (dispatch, _getState, api) => {
  api.get(ApiRoute.FAVORITE)
    .then(({data}) => {
      dispatch(loadFavoriteFilms(parseFilms(data)));
    })
    .catch((err) => {
      throw Error(`Favorite Films load error: ${err.message}`);
    });
};

const fetchFilms = () => (dispatch, _getState, api) => {
  api.get(ApiRoute.FILMS)
    .then(({data}) => {
      dispatch(loadFilms(parseFilms(data)));
    })
    .catch((err) => {
      throw Error(`Films load error: ${err.message}`);
    });
};

const fetchPromo = () => (dispatch, _getState, api) => {
  api.get(ApiRoute.PROMO)
    .then(({data}) => {
      dispatch(loadPromo(parseFilm(data)));
    })
    .catch((err) => {
      throw Error(`Promo film load error: ${err.message}`);
    });
};

const fetchReviews = (id) => (dispatch, _getState, api) => {
  api.get(`${ApiRoute.REVIEWS}/${id}`)
    .then(({data}) => {
      dispatch(loadReviews(parseComments(data)));
    })
    .catch((err) => {
      throw Error(`Reviews load error: ${err.message}`);
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

const switchFavorite = (id, isFavorite) => (dispatch, _getState, api) => {
  api.post(`${ApiRoute.FAVORITE}/${id}/${isFavorite ? 0 : 1}`)
    .then(({data}) => {
      dispatch(loadCurrentFilm(parseFilm(data)));
    })
    .then(() => dispatch(fetchPromo()))
    .catch((err) => {
      throw Error(`Switch favorite error: ${err.message}`);
    });
};


export {
  checkAuth,
  fetchCurrentFilm,
  fetchFavoriteFilms,
  fetchFilms,
  fetchPromo,
  fetchReviews,
  login,
  postReview,
  switchFavorite,
};
