import React from 'react';
import PropTypes from 'prop-types';


const FilmNav = (props) => {
  const {
    currentTab,
    onTabClick,
    tabNames,
  } = props;

  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {tabNames.map((tabName, i) => {
          return (
            <li
              className={`movie-nav__item ${tabName === currentTab
                ? `movie-nav__item--active`
                : ``
              }`}
              key={`${tabName}-${i}`}
              onClick={(e) => {
                e.preventDefault();
                onTabClick(tabName);
              }}
            >
              <a
                href="#"
                className="movie-nav__link"
              >
                {tabName}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};


FilmNav.propTypes = {
  currentTab: PropTypes.string.isRequired,
  onTabClick: PropTypes.func.isRequired,
  tabNames: PropTypes.arrayOf(PropTypes.string).isRequired,
};


export default FilmNav;
