import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import filmType from '../../types/film.js';
import history from '../../history.js';
import VideoPlayer from '../video-player/video-player.jsx';


const HOVER_PLAY_DELAY = 1000;


class FilmCard extends PureComponent {
  constructor(props) {
    super(props);

    this._hoverTimeoutId = null;

    this.state = {
      isHovered: false,
    };
  }

  render() {
    const {isHovered} = this.state;

    const {
      film,
      onFilmCardHover,
    } = this.props;

    const {
      cover,
      name,
      preview,
    } = film;

    return (
      <article
        className="small-movie-card catalog__movies-card"

        onMouseEnter={() => {
          onFilmCardHover(film);
          this._hoverTimeoutId = window.setTimeout(() => {
            this.setState({
              isHovered: true,
            });
          }, HOVER_PLAY_DELAY);
        }}

        onMouseLeave={() => {
          window.clearTimeout(this._hoverTimeoutId);
          this.setState({
            isHovered: false,
          });
        }}

        onClick={() => {
          history.push(`/films/1`);
        }}
      >
        <div className="small-movie-card__image">
          {isHovered
            ? (<VideoPlayer
              poster={cover}
              src={preview}
              width={280}
              height={175}
              isPlaying={isHovered}
            />)
            : (<img
              src={cover}
              alt={name}
              width="280"
              height="175"
            />)
          }
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link">{name}</a>
        </h3>
      </article>
    );
  }
}


FilmCard.propTypes = {
  film: filmType,
  onFilmCardHover: PropTypes.func.isRequired,
  renderPlayer: PropTypes.func,
};


export default FilmCard;
