import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {
  fetchCurrentFilm,
  postReview,
} from '../../store/actions/api-actions.js';
import filmType from '../../types/film.js';
import {AppRoute} from '../../const.js';
import Logo from '../logo/logo.jsx';
import UserBlock from '../user-block/user-block.jsx';


const Review = (props) => {
  const {
    currentFilm,
    getFilm,
    filmId,
    onFormSubmit,
    renderForm,
  } = props;

  useEffect(() => {
    getFilm(filmId);
  }, [filmId]);

  if (currentFilm === null) {
    return null;
  }

  const {
    cover,
    name,
    poster,
  } = currentFilm;

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
                  to={`${AppRoute.FILMS}/${filmId}`}
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

          <UserBlock/>
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
        {renderForm((rating, comment) => {
          onFormSubmit(filmId, rating, comment);
        }, false)}
      </div>

    </section>
  );
};


Review.propTypes = {
  currentFilm: filmType.isRequired,
  filmId: PropTypes.number.isRequired,
  getFilm: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  renderForm: PropTypes.func.isRequired,
};


const mapStateToProps = ({DATA}) => ({
  currentFilm: DATA.currentFilm,
});

const mapDispatchToProps = (dispatch) => ({
  getFilm(id) {
    dispatch(fetchCurrentFilm(id));
  },

  onFormSubmit(id, rating, comment) {
    dispatch(postReview(id, rating, comment));
  },
});

export {Review};
export default connect(mapStateToProps, mapDispatchToProps)(Review);
