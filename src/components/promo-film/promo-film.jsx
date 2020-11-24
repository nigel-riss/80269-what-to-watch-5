import React from 'react';
import filmType from '../../types/film.js';
import history from '../../history.js';
import Logo from '../logo/logo.jsx';

const PromoFilm = (props) => {
  const {
    cover: coverUrl,
    poster: posterUrl,
    name: filmName,
    genre: filmGenre,
    year: filmYear,
  } = props.film;

  return (
    <section className="movie-card">
      <div className="movie-card__bg">
        <img
          src={coverUrl}
          alt={filmName}
        />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header movie-card__head">
        <Logo/>

        <div className="user-block">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </div>
        </div>
      </header>

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img
              src={posterUrl}
              alt={filmName}
              width="218"
              height="327"
            />
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{filmName}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{filmGenre.join(`, `)}</span>
              <span className="movie-card__year">{filmYear}</span>
            </p>

            <div className="movie-card__buttons">
              <button
                className="btn btn--play movie-card__button"
                type="button"
                onClick={() => {
                  history.push(`/player/1`);
                }}
              >
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <button className="btn btn--list movie-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"></use>
                </svg>
                <span>My list</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


PromoFilm.propTypes = {
  film: filmType,
};


export default PromoFilm;
