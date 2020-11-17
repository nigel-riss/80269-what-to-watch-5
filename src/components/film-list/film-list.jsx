import React, {PureComponent} from 'react';
import {filterFilmsByGenre} from '../../utils.js';
import filmType from '../../types/film.js';
import FilmCard from '../film-card/film-card.jsx';

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
      genre,
    } = this.props;

    return (
      <div className="catalog__movies-list">
        {filterFilmsByGenre(films, genre).map((film, i) => {
          return <FilmCard
            key={film.name + i}
            onFilmCardHover={this._handleFilmCardHover}
            film={film}
          />;
        })}
      </div>
    );
  }
}


FilmList.propTypes = filmType;


export default FilmList;
