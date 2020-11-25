import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import classNames from 'classnames';
import {AppRoute} from '../../const.js';


const Logo = (props) => {
  const {
    isLight,
  } = props;

  const logoLinkClass = classNames({
    'logo__link': true,
    'logo__link--light': isLight,
  });

  return (
    <div className="logo">
      <Link to={AppRoute.ROOT} className={logoLinkClass}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
};


Logo.defaultProps = {
  isLight: false,
};


Logo.propTypes = {
  isLight: PropTypes.bool,
};


export default Logo;
