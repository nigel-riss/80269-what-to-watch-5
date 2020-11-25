import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {
  AppRoute,
  AuthorizationStatus,
} from '../../const.js';


const UserBlock = (props) => {
  const {
    authorizationStatus,
  } = props;

  return (
    <div className="user-block">
      {authorizationStatus === AuthorizationStatus.AUTH
        ? <div className="user-block__avatar">
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
        </div>
        : <Link to={AppRoute.LOGIN} className="user-block__link">Sign in</Link>
      }
    </div>
  );
};


UserBlock.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
};


const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus,
});


export {UserBlock};
export default connect(mapStateToProps, null)(UserBlock);
