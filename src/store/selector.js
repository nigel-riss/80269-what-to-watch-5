import {createSelector} from 'reselect';
import {filterFilmsByGenre} from '../utils/common.js';


const selectFilms = ({DATA}) => DATA.films;
const selectGenre = ({APP}) => APP.genre;

const selectFilmsByGenre = createSelector(
    selectFilms,
    selectGenre,
    (films, genre) => filterFilmsByGenre(films, genre)
);


export {
  selectFilmsByGenre,
};
