import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import {FilmTab} from '../../const.js';
import filmType from '../../types/film.js';
import FilmList from '../film-list/film-list.jsx';
import Footer from '../footer/footer.jsx';
import Logo from '../logo/logo.jsx';
import FilmNav from '../film-nav/film-nav.jsx';
import OverviewTab from '../overview-tab/overview-tab.jsx';
import DetailsTab from '../details-tab/details-tab.jsx';
import ReviewsTab from '../reviews-tab/reviews-tab.jsx';

class Film extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentTab: FilmTab.OVERVIEW,
    };
  }

  _renderTab(tabName) {
    const {film} = this.props;

    switch (tabName) {
      case FilmTab.OVERVIEW:
        return <OverviewTab
          film={film}
        />;
      case FilmTab.DETAILS:
        return <DetailsTab
          film={film}
        />;
      case FilmTab.REVIEWS:
        return <ReviewsTab
        />;
      default:
        return null;
    }
  }

  render() {
    const {
      alikeFilms,
      film,
    } = this.props;

    const {
      cover,
      name,
      genre,
      year,
      poster,
    } = film;

    const {currentTab} = this.state;

    return (
      <React.Fragment>
        <section className="movie-card movie-card--full">
          <div className="movie-card__hero">
            <div className="movie-card__bg">
              <img
                src={cover}
                alt={name}
              />
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <header className="page-header movie-card__head">
              <Logo/>

              <div className="user-block">
                <div className="user-block__avatar">
                  <img src="/img/avatar.jpg" alt="User avatar" width="63" height="63" />
                </div>
              </div>
            </header>

            <div className="movie-card__wrap">
              <div className="movie-card__desc">
                <h2 className="movie-card__title">{name}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{genre.join(`, `)}</span>
                  <span className="movie-card__year">{year}</span>
                </p>

                <div className="movie-card__buttons">
                  <button className="btn btn--play movie-card__button" type="button">
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
                  <Link
                    to="/films/1/review"
                    className="btn movie-card__button"
                  >
                    Add review
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="movie-card__wrap movie-card__translate-top">
            <div className="movie-card__info">
              <div className="movie-card__poster movie-card__poster--big">
                <img
                  src={poster}
                  alt={name}
                  width="218"
                  height="327"
                />
              </div>

              <div className="movie-card__desc">
                <FilmNav
                  tabNames={Object.values(FilmTab)}
                  currentTab={currentTab}
                  onTabClick={(tabName) => {
                    this.setState({
                      currentTab: tabName,
                    });
                  }}
                />

                {this._renderTab(currentTab)}
              </div>
            </div>
          </div>
        </section>

        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>

            <FilmList
              films={alikeFilms}
            />
          </section>

          <Footer/>
        </div>
      </React.Fragment>
    );
  }
}


Film.propTypes = filmType;


export default Film;
