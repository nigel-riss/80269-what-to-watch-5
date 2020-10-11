import React, {PureComponent} from 'react';
import filmTypes from '../../types/film.js';
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
    } = this.props;

    return (
      <div className="catalog__movies-list">
        <br></br>
        {films.map((film, i) => <FilmCard
          key={film.name + i}
          onFilmCardHover={this._handleFilmCardHover}
          film={film}
        />)}
      </div>
    );
  }
};


FilmList.propTypes = filmTypes;


export default FilmList;
