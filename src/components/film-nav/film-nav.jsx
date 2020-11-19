import React from 'react';
import PropTypes from 'prop-types';
import FilmNavItem from '../film-nav-item/film-nav-item.jsx';


const FilmNav = (props) => {
  const {
    activeTab,
    onTabClick,
    tabNames,
  } = props;

  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {tabNames.map((tabName, i) => {
          return (
            <FilmNavItem
              key={`${tabName}-${i}`}
              isActive={activeTab === tabName}
              name={tabName}
              onClick={() => {
                onTabClick(tabName);
              }}
            />
          );
        })}
      </ul>
    </nav>
  );
};


FilmNav.propTypes = {
  activeTab: PropTypes.string.isRequired,
  onTabClick: PropTypes.func.isRequired,
  tabNames: PropTypes.arrayOf(PropTypes.string).isRequired,
};


export default FilmNav;
