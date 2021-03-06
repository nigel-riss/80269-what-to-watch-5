import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {
  AppRoute,
  AuthorizationStatus,
} from '../../const.js';
import {redirectToRoute} from '../../store/actions/actions.js';


const UserBlock = (props) => {
  const {
    authorizationStatus,
    onAvatarClick,
    userAvatarUrl,
  } = props;

  return (
    <div className="user-block">
      {authorizationStatus === AuthorizationStatus.AUTH
        ? <div
          className="user-block__avatar"
          onClick={onAvatarClick}
        >
          <img
            src={userAvatarUrl}
            alt="User avatar"
            width="63"
            height="63"
          />
        </div>
        : <Link to={AppRoute.LOGIN} className="user-block__link">Sign in</Link>
      }
    </div>
  );
};


UserBlock.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  onAvatarClick: PropTypes.func.isRequired,
  userAvatarUrl: PropTypes.string.isRequired,
};


const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus,
  userAvatarUrl: USER.userAvatarUrl,
});

const mapDispatchToProps = (dispatch) => ({
  onAvatarClick() {
    dispatch(redirectToRoute(AppRoute.MY_LIST));
  }
});


export {UserBlock};
export default connect(mapStateToProps, mapDispatchToProps)(UserBlock);
