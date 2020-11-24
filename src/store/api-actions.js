import {
  loadFilms,
} from './action.js';


const fetchFilms = () => (dispatch, _getState, api) => {
  api.get(`/films`)
    .then(({data}) => dispatch(loadFilms(data)));
};


export {
  fetchFilms,
};
