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
          });
        };
      }
    }

    componentWillUnmount() {
      const video = this._videoRef.current;
      if (video) {
        video.oncanplay = null;
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
      } = this.state;

      return (
        <Component
          {...this.props}
          isLoading={isLoading}
          isPlaying={isPlaying}
          videoRef={this._videoRef}
          onPlayPauseClick={this._handlePlayPauseClick}
          onFullScreenClick={this._handleFullScreenClick}
        />
      );
    }
  }

  return WithPlayer;
}


export default withPlayer;
