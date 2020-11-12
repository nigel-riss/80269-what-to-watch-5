import React from 'react';
import PropTypes from 'prop-types';


const getExtraClass = (genre, activeGenre) => {
  return (genre === activeGenre)
    ? `catalog__genres-item--active`
    : ``;
};


const GenreList = (props) => {
  const {
    activeGenre,
    genres,
    onGenreItemClick,
  } = props;

  return (
    <ul className="catalog__genres-list">
      <li className={`catalog__genres-item ${getExtraClass(null, activeGenre)}`}>
        <a
          href="#"
          className="catalog__genres-link"
          onClick={(e) => {
            e.preventDefault();
            onGenreItemClick(null);
          }}
        >
          All genres
        </a>
      </li>
      {genres.map((genre, i) => {
        return (
          <li
            className={`catalog__genres-item ${getExtraClass(genre, activeGenre)}`}
            key={`${genre}-${i}`}
          >
            <a
              href="#"
              className="catalog__genres-link"
              onClick={(e) => {
                e.preventDefault();
                onGenreItemClick(genre);
              }}
            >
              {genre}
            </a>
          </li>
        );
      })}
    </ul>
  );
};


GenreList.propTypes = {
  activeGenre: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  onGenreItemClick: PropTypes.func.isRequired,
};


export default GenreList;
