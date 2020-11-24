import {
  loadFilms,
  loadPromo,
} from './action.js';
import {
  parseFilm,
  parseFilms,
} from '../utils/film-adapter.js';


const fetchFilms = () => (dispatch, _getState, api) => {
  api.get(`/films`)
    .then(({data}) => dispatch(loadFilms(parseFilms(data))));
};

const fetchPromo = () => (dispatch, _getState, api) => {
  api.get(`/films/promo`)
    .then(({data}) => dispatch(loadPromo(parseFilm(data))));
};


export {
  fetchFilms,
  fetchPromo,
};
