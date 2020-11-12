import React from 'react';
import PropTypes from 'prop-types';


const GenreList = (props) => {
  const {
    genres,
    onGenreItemClick,
  } = props;

  return (
    <ul className="catalog__genres-list">
      <li className="catalog__genres-item catalog__genres-item--active">
        <a href="#" className="catalog__genres-link">All genres</a>
      </li>
      {genres.map((genre, i) => {
        return (
          <li
            className="catalog__genres-item"
            key={`${genre}-${i}`}
          >
            <a href="#" className="catalog__genres-link">
              {genre}
            </a>
          </li>
        );
      })}
    </ul>
  );
};


GenreList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  onGenreItemClick: PropTypes.func.isRequired,
};


export default GenreList;
