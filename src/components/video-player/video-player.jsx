import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';


class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();

    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    const {src} = this.props;
    const video = this._videoRef.current;

    video.src = src;

    video.oncanplay = () => {
      this.setState({
        isLoading: false,
      });
    };
  }

  componentWillUnmount() {
    const video = this._videoRef.current;
    video.oncanplay = null;
  }

  render() {
    const {
      poster,
      width,
      height,
    } = this.props;

    return (
      <video
        poster={poster}
        ref={this._videoRef}
        width={width}
        height={height}
        muted
      />
    );
  }

  componentDidUpdate() {
    const video = this._videoRef.current;

    if (this.props.isPlaying) {
      video.play();
    } else {
      video.pause();
    }
  }
}


VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};


export default VideoPlayer;