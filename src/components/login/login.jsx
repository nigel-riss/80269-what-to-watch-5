import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
  redirectToRoute,
  setErrorMessage,
} from '../../store/actions/actions.js';
import {login} from '../../store/actions/api-actions.js';
import Footer from '../footer/footer.jsx';
import Logo from '../logo/logo.jsx';
import {
  AppRoute,
  AuthorizationStatus,
  ErrorMessage,
} from '../../const.js';


const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


class Login extends PureComponent {
  constructor(props) {
    super(props);

    this.loginRef = createRef();
    this.passwordRef = createRef();

    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(e) {
    e.preventDefault();

    const {
      onInputError,
      onSubmit,
    } = this.props;

    const email = this.loginRef.current.value;
    const password = this.passwordRef.current.value;
    const inputError = this._getInputError(email, password);

    if (inputError === ``) {
      onSubmit({
        login: email,
        password,
      });
    } else {
      onInputError(inputError);
    }
  }

  _getInputError(email, password) {
    if (!this._isValidEmail(email)) {
      return ErrorMessage.BAD_EMAIL;
    }

    if (password.length === 0) {
      return ErrorMessage.NO_PASSWORD;
    }

    return ``;
  }

  _isValidEmail(email) {
    return EMAIL_REGEX.test(email.toLowerCase());
  }

  componentDidMount() {
    const {
      authorizationStatus,
      onAuthorized,
    } = this.props;


    if (authorizationStatus === AuthorizationStatus.AUTH) {
      onAuthorized();
    }
  }

  render() {
    const {loginErrorMessage} = this.props;

    return (
      <div className="user-page">
        <header className="page-header user-page__head">
          <Logo/>

          <h1 className="page-title user-page__title">Sign in</h1>
        </header>

        <div className="sign-in user-page__content">
          <div className="sign-in__message">
            <p>{loginErrorMessage}</p>
          </div>
          <form
            action="#"
            className="sign-in__form"
            onSubmit={this._handleSubmit}
          >
            <div className="sign-in__fields">
              <div className="sign-in__field">
                <input
                  className="sign-in__input"
                  id="user-email"
                  name="user-email"
                  placeholder="Email address"
                  ref={this.loginRef}
                  type="email"
                />
                <label
                  className="sign-in__label visually-hidden"
                  htmlFor="user-email"
                >
                  Email address
                </label>
              </div>
              <div className="sign-in__field">
                <input
                  className="sign-in__input"
                  id="user-password"
                  name="user-password"
                  placeholder="Password"
                  ref={this.passwordRef}
                  type="password"
                />
                <label
                  className="sign-in__label visually-hidden"
                  htmlFor="user-password"
                >
                  Password
                </label>
              </div>
            </div>
            <div className="sign-in__submit">
              <button className="sign-in__btn" type="submit">Sign in</button>
            </div>
          </form>
        </div>

        <Footer/>
      </div>
    );
  }
}


Login.propTypes = {
  authorizationStatus: PropTypes.oneOf(Object.values(AuthorizationStatus)).isRequired,
  loginErrorMessage: PropTypes.string.isRequired,
  onAuthorized: PropTypes.func.isRequired,
  onInputError: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};


const mapStateToProps = ({APP, USER}) => ({
  authorizationStatus: USER.authorizationStatus,
  loginErrorMessage: APP.errorMessage,
});

const mapDispatchToProps = (dispatch) => ({
  onAuthorized() {
    dispatch(redirectToRoute(AppRoute.ROOT));
  },

  onInputError(errorMessage) {
    dispatch(setErrorMessage(errorMessage));
  },

  onSubmit(authData) {
    dispatch(login(authData));
  },
});


export {Login};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
