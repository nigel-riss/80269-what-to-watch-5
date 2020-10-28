import React, {PureComponent} from 'react';
import filmType from '../../types/film.js';
import FilmCard from '../film-card/film-card.jsx';
import withVideoPlayer from '../../hocs/with-video-player/with-video-player.jsx';


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
          const FilmCardWraped = withVideoPlayer(FilmCard);
          return <FilmCardWraped
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
