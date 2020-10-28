import React, {PureComponent} from 'react';
import VideoPlayer from '../../components/video-player/video-player.jsx';

const HOVER_PLAY_DELAY = 1000;


const withVideoPlayer = (Component) => {
  class WithVideoPlayer extends PureComponent {
    constructor(props) {
      super(props);

      this._hoverTimeoutId = null;

      this.state = {
        isPlaying: false,
      };
    }

    render() {
      return <Component
        {...this.props}

        onMouseEnter={() => {
          this._hoverTimeoutId = window.setTimeout(() => {
            this.setState({
              isPlaying: true,
            });
          }, HOVER_PLAY_DELAY);
        }}

        onMouseOut={() => {
          window.clearTimeout(this._hoverTimeoutId);
          this.setState({
            isPlaying: false,
          });
        }}

        renderPlayer={(options) => {
          const {
            poster,
            src,
            width,
            height,
          } = options;

          return <VideoPlayer
            poster={poster}
            src={src}
            width={width}
            height={height}
            isPlaying={this.state.isPlaying}
          />;
        }}
      />;
    }
  }

  return WithVideoPlayer;
};


export default withVideoPlayer;
