import React from 'react';
import PropTypes from 'prop-types';
import filmType from '../../types/film.js';
import FilmCard from '../film-card/film-card.jsx';
import withDelayedHover from '../../hocs/with-delayed-hover/with-delayed-hover.jsx';
import withVideo from '../../hocs/with-video/with-video.jsx';
import {FilmCardOption} from '../../const.js';


const WrappedFilmCard = withDelayedHover(withVideo(FilmCard));


const FilmList = (props) => {
  const {films} = props;

  return (
    <div className="catalog__movies-list">
      {films.map((film, i) => {
        return <WrappedFilmCard
          key={film.name + i}
          film={film}
          hoverDelay={FilmCardOption.HOVER_DELAY}
        />;
      })}
    </div>
  );
};


FilmList.propTypes = {
  films: PropTypes.arrayOf(filmType),
};


export default FilmList;
