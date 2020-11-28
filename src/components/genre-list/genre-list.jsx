import React from 'react';
import PropTypes from 'prop-types';
import GenreListItem from '../genre-list-item/genre-list-item.jsx';


const GenreList = (props) => {
  const {
    activeGenre,
    genres,
    onGenreItemClick,
  } = props;

  return (
    <ul className="catalog__genres-list">
      <GenreListItem
        isActive={(activeGenre === null)}
        genre={null}
        onClick={onGenreItemClick}
        title={`All genres`}
      />
      {genres.map((genre, i) => {
        return (
          <GenreListItem
            key={`${genre}-${i + 1}`}
            id={i + 1}
            isActive={(activeGenre === genre)}
            genre={genre}
            onClick={onGenreItemClick}
            title={genre}
          />
        );
      })}
    </ul>
  );
};


GenreList.propTypes = {
  activeGenre: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  onGenreItemClick: PropTypes.func.isRequired,
};


export default GenreList;
