import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import filmType from '../../types/film.js';
import Logo from '../logo/logo.jsx';


const Review = (props) => {
  const {
    film,
    renderForm,
  } = props;

  const {
    cover,
    name,
    poster,
  } = film;

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={cover} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo/>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link
                  to="/films/1"
                  className="breadcrumbs__link"
                >
                  {name}
                </Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="/img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </div>
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img
            src={poster}
            alt={`${name} poster`}
            width="218"
            height="327"
          />
        </div>
      </div>

      <div className="add-review">
        {renderForm()}
      </div>

    </section>
  );
};


Review.propTypes = {
  film: filmType,
  renderForm: PropTypes.func.isRequired,
};


export default Review;
