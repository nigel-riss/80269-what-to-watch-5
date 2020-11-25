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

      this._handleMouseEnter = this._handleMouseEnter.bind(this);
      this._handleMouseLeave = this._handleMouseLeave.bind(this);
    }

    _handleMouseEnter() {
      const {hoverDelay} = this.props;

      this._hoverTimeoutId = window.setTimeout(() => {
        this.setState({
          isHovered: true,
        });
      }, hoverDelay);
    }

    _handleMouseLeave() {
      window.clearTimeout(this._hoverTimeoutId);
      this.setState({
        isHovered: false,
      });
    }

    componentWillUnmount() {
      window.clearTimeout(this._hoverTimeoutId);
    }

    render() {
      const {isHovered} = this.state;

      return (
        <Component
          {...this.props}
          isHovered={isHovered}
          onMouseEnter={this._handleMouseEnter}
          onMouseLeave={this._handleMouseLeave}
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
