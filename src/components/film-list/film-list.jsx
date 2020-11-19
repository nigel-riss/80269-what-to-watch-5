import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import filmType from '../../types/film.js';
import {HOVER_PLAY_DELAY} from '../../const.js';
import FilmCard from '../film-card/film-card.jsx';
import withDelayedHover from '../../hocs/with-delayed-hover/with-delayed-hover.jsx';


const WrapedFilmCard = withDelayedHover(FilmCard);

class FilmList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {activeFilm: this.props.films[0]};
    this._handleFilmCardHover = this._handleFilmCardHover.bind(this);
  }

  _handleFilmCardHover(film) {
    this.setState({
      activeFilm: film,
    });
  }

  render() {
    const {
      films,
    } = this.props;

    return (
      <div className="catalog__movies-list">
        {films.map((film, i) => {
          return <WrapedFilmCard
            key={film.name + i}
            onFilmCardHover={this._handleFilmCardHover}
            film={film}
            hoverDelay={HOVER_PLAY_DELAY}
          />;
        })}
      </div>
    );
  }
}


FilmList.propTypes = {
  films: PropTypes.arrayOf(filmType),
};


export default FilmList;
