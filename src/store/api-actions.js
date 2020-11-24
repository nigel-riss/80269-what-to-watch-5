import {
  loadFilms,
} from './action.js';
import {parseFilms} from '../utils/film-adapter.js';


const fetchFilms = () => (dispatch, _getState, api) => {
  api.get(`/films`)
    .then(({data}) => dispatch(loadFilms(parseFilms(data))));
};


export {
  fetchFilms,
};
