import React, {PureComponent, createRef} from 'react';


const withVideo = (Component) => {
  class WithVideo extends PureComponent {
    constructor(props) {
      super(props);

      this._videoRef = createRef();

      this.state = {
        isLoading: true,
      };
    }

    componentDidMount() {
      const video = this._videoRef.current;

      video.src = this.src;

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
      const {isLoading} = this.state;

      return <Component
        {...this.props}

        renderVideo={({src, poster, width, height, isPlaying}) => {
          this.src = src;

          const video = this._videoRef.current;
          if (video) {
            if (isPlaying && !isLoading) {
              video.play();
              video.currentTime = 0;
            } else {
              video.load();
            }
          }

          return (
            <video
              disabled={isLoading}
              poster={poster}
              ref={this._videoRef}
              width={width}
              height={height}
              muted
            />
          );
        }}
      />;
    }
  }

  return WithVideo;
};


export default withVideo;
