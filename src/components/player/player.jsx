import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import history from '../../history.js';
import {connect} from 'react-redux';
import {fetchCurrentFilm} from '../../store/actions/api-actions.js';
import {AppRoute} from '../../const.js';
import {formatElapsedTime} from '../../utils/time.js';
import filmType from '../../types/film.js';


const Player = (props) => {
  const {
    currentFilm,
    filmId,
    getFilm,
    isLoading,
    isPlaying,
    onFullScreenClick,
    onPlayPauseClick,
    progress,
    progressRef,
    videoRef,
    timeElapsed,
  } = props;

  useEffect(() => {
    getFilm(filmId);
  }, [filmId]);


  return (
    <div className="player">
      <video
        className="player__video"
        onClick={onPlayPauseClick}
        poster={currentFilm && currentFilm.cover}
        ref={videoRef}
        src={currentFilm && currentFilm.videoLink}
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
              ref={progressRef}
              value={progress}
              max="100"
            />
            <div
              className="player__toggler"
              style={{left: `${progress}%`}}
            >
              Toggler
            </div>
          </div>
          <div className="player__time-value">
            {formatElapsedTime(timeElapsed)}
          </div>
        </div>

        <div className="player__controls-row">
          <button
            className="player__play"
            onClick={onPlayPauseClick}
            type="button"
          >
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref={isPlaying ? `#pause` : `#play-s`}/>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">
            {(currentFilm && !isLoading)
              ? currentFilm.name
              : `Loading...`}
          </div>

          <button
            className="player__full-screen"
            onClick={onFullScreenClick}
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
  isLoading: PropTypes.bool.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  onFullScreenClick: PropTypes.func.isRequired,
  onPlayPauseClick: PropTypes.func.isRequired,
  progress: PropTypes.number.isRequired,
  progressRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element)
  }).isRequired,
  videoRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element)
  }).isRequired,
  timeElapsed: PropTypes.number.isRequired,
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
