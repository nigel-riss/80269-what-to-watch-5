import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import filmType from '../../types/film.js';
import history from '../../history.js';
import {switchFavorite} from '../../store/actions/api-actions.js';
import Logo from '../logo/logo.jsx';
import MyListButton from '../my-list-button/my-list-button.jsx';
import UserBlock from '../user-block/user-block.jsx';
import {AppRoute} from '../../const.js';

const PromoFilm = (props) => {
  const {
    film,
    onMyListButtonClick,
  } = props;

  const {
    id,
    isFavorite,
    cover,
    poster,
    name,
    genre,
    year,
  } = film;

  return (
    <section className="movie-card">
      <div className="movie-card__bg">
        <img
          src={cover}
          alt={name}
        />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header movie-card__head">
        <Logo/>

        <UserBlock/>
      </header>

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img
              src={poster}
              alt={name}
              width="218"
              height="327"
            />
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{name}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{genre}</span>
              <span className="movie-card__year">{year}</span>
            </p>

            <div className="movie-card__buttons">
              <button
                className="btn btn--play movie-card__button"
                type="button"
                onClick={() => {
                  history.push(`${AppRoute.PLAYER}/${id}`);
                }}
              >
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>

              <MyListButton
                isFavorite={isFavorite}
                onClick={() => {
                  onMyListButtonClick(id, isFavorite);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


PromoFilm.propTypes = {
  film: filmType,
  onMyListButtonClick: PropTypes.func.isRequired,
};


const mapDispatchToProps = (dispatch) => ({
  onMyListButtonClick(id, isFavorite) {
    dispatch(switchFavorite(id, isFavorite));
  },
});


export {PromoFilm};
export default connect(null, mapDispatchToProps)(PromoFilm);
