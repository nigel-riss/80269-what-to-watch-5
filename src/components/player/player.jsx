import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import history from '../../history.js';
import {connect} from 'react-redux';
import {fetchCurrentFilm} from '../../store/actions/api-actions.js';
import {AppRoute} from '../../const.js';
import filmType from '../../types/film.js';


const Player = (props) => {
  const {
    currentFilm,
    getFilm,
    filmId,
  } = props;

  const [isPlaying, setPlayingState] = useState(false);

  const _videoRef = useRef();

  useEffect(() => {
    getFilm(filmId);
  }, [filmId]);

  if (currentFilm === null) {
    return null;
  }


  const _handlePlayPauseClick = () => {
    setPlayingState(!isPlaying);
    switch (isPlaying) {
      case true:
        _videoRef.current.pause();
        break;
      case false:
        _videoRef.current.play();
    }
  };

  const _handleFullScreenClick = () => {
    _videoRef.current.requestFullscreen();
  };

  const {
    cover,
    name,
    videoLink,
  } = props.currentFilm;

  return (
    <div className="player">
      <video
        className="player__video"
        poster={cover}
        ref={_videoRef}
        src={videoLink}
      />

      <button
        type="button"
        className="player__exit"
        onClick={() => {
          history.push(`${AppRoute.FILMS}/${filmId}`);
        }}
      >
        Exit
      </button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress
              className="player__progress"
              value="30"
              max="100"
            />
            <div
              className="player__toggler"
              style={{left: `30%`}}
            >
              Toggler
            </div>
          </div>
          <div className="player__time-value">1:30:29</div>
        </div>

        <div className="player__controls-row">
          <button
            className="player__play"
            onClick={_handlePlayPauseClick}
            type="button"
          >
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref={isPlaying ? `#pause` : `#play-s`}/>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">{name}</div>

          <button
            className="player__full-screen"
            onClick={_handleFullScreenClick}
            type="button"
          >
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};


Player.propTypes = {
  currentFilm: filmType,
  filmId: PropTypes.number.isRequired,
  getFilm: PropTypes.func.isRequired,
};


const mapStateToProps = ({DATA}) => ({
  currentFilm: DATA.currentFilm,
});

const mapDispatchToProps = (dispatch) => ({
  getFilm(id) {
    dispatch(fetchCurrentFilm(id));
  },
});


export {Player};
export default connect(mapStateToProps, mapDispatchToProps)(Player);
