import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const GenreListItem = (props) => {
  const {
    isActive,
    genre,
    onClick,
    title,
  } = props;

  return (
    <li
      className={classNames({
        'catalog__genres-item': true,
        'catalog__genres-item--active': (isActive),
      })}
    >
      <a
        href="#"
        className="catalog__genres-link"
        onClick={(e) => {
          e.preventDefault();
          onClick(genre);
        }}
      >
        {title}
      </a>
    </li>
  );
};


GenreListItem.propTypes = {
  isActive: PropTypes.bool.isRequired,
  genre: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};


export default GenreListItem;
