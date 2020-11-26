import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {login} from '../../store/actions/api-actions.js';
import Footer from '../footer/footer.jsx';
import Logo from '../logo/logo.jsx';


class Login extends PureComponent {
  constructor(props) {
    super(props);

    this.loginRef = createRef();
    this.passwordRef = createRef();

    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(e) {
    const {onSubmit} = this.props;

    e.preventDefault();
    onSubmit({
      login: this.loginRef.current.value,
      password: this.passwordRef.current.value,
    });
  }

  render() {
    return (
      <div className="user-page">
        <header className="page-header user-page__head">
          <Logo/>

          <h1 className="page-title user-page__title">Sign in</h1>
        </header>

        <div className="sign-in user-page__content">
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
  onSubmit: PropTypes.func.isRequired,
};


const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  },
});


export {Login};
export default connect(null, mapDispatchToProps)(Login);
