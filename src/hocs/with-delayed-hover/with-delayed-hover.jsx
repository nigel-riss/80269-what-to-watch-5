import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';


const withDelayedHover = (Component) => {
  class WithDelayedHover extends PureComponent {
    constructor(props) {
      super(props);

      this._hoverTimeoutId = null;

      this.state = {
        isHovered: false,
      };
    }

    render() {
      const {hoverDelay} = this.props;
      const {isHovered} = this.state;

      return (
        <Component
          {...this.props}
          isHovered={isHovered}

          onMouseEnter={() => {
            this._hoverTimeoutId = window.setTimeout(() => {
              this.setState({
                isHovered: true,
              });
            }, hoverDelay);
          }}

          onMouseLeave={() => {
            window.clearTimeout(this._hoverTimeoutId);
            this.setState({
              isHovered: false,
            });
          }}
        />
      );
    }
  }


  WithDelayedHover.propTypes = {
    hoverDelay: PropTypes.number.isRequired,
  };


  return WithDelayedHover;
};


export default withDelayedHover;
