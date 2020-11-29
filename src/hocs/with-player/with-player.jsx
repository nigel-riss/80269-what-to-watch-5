import React, {createRef, PureComponent} from 'react';


const withPlayer = (Component) => {
  class WithPlayer extends PureComponent {
    constructor(props) {
      super(props);

      this._progressRef = createRef();
      this._videoRef = createRef();

      this.state = {
        isLoading: true,
        isPlaying: false,
        progress: 0,
        timeElapsed: 0,
      };

      this._handleFullScreenClick = this._handleFullScreenClick.bind(this);
      this._handlePlayPauseClick = this._handlePlayPauseClick.bind(this);
    }

    componentDidMount() {
      const video = this._videoRef.current;

      if (video) {
        video.oncanplay = () => {
          this.setState({
            isLoading: false,
            timeElapsed: video.duration,
          });
        };

        video.ontimeupdate = () => {
          this.setState({
            progress: video.currentTime / video.duration * 100,
            timeElapsed: video.duration - video.currentTime,
          });
        };
      }
    }

    componentWillUnmount() {
      const video = this._videoRef.current;
      if (video) {
        video.oncanplay = null;
        video.ontimeupdate = null;
      }
      this._handleFullScreenClick = null;
      this._handlePlayPauseClick = null;
    }

    _handlePlayPauseClick() {
      const {
        isLoading,
        isPlaying,
      } = this.state;

      const video = this._videoRef.current;

      if (!isLoading && video) {
        switch (isPlaying) {
          case true:
            video.pause();
            this.setState({
              isPlaying: false,
            });
            break;
          case false:
            video.play();
            this.setState({
              isPlaying: true,
            });
        }
      }
    }

    _handleFullScreenClick() {
      const video = this._videoRef.current;
      video.requestFullscreen();
    }

    render() {
      const {
        isPlaying,
        isLoading,
        progress,
        timeElapsed,
      } = this.state;

      return (
        <Component
          {...this.props}
          isLoading={isLoading}
          isPlaying={isPlaying}
          onPlayPauseClick={this._handlePlayPauseClick}
          onFullScreenClick={this._handleFullScreenClick}
          progress={progress}
          progressRef={this._progressRef}
          videoRef={this._videoRef}
          timeElapsed={timeElapsed}
        />
      );
    }
  }

  return WithPlayer;
};


export default withPlayer;
