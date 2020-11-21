import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const FilmNavItem = (props) => {
  const {
    isActive,
    name,
    onClick,
  } = props;

  return (
    <li
      className={classNames({
        'movie-nav__item': true,
        'movie-nav__item--active': isActive,
      })}
      onClick={(e) => {
        e.preventDefault();
        onClick(name);
      }}
    >
      <a href="#" className="movie-nav__link">{name}</a>
    </li>
  );
};


FilmNavItem.propTypes = {
  isActive: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.string.isRequired,
};


export default FilmNavItem;
