import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import filmType from '../../types/film.js';
import {
  Router,
  Switch,
  Route,
} from 'react-router-dom';
import history from '../../history.js';
import {
  AppRoute,
  FilmTabName,
} from '../../const.js';
import Film from '../film/film.jsx';
import Login from '../login/login.jsx';
import Main from '../main/main.jsx';
import MyList from '../mylist/mylist.jsx';
import Player from '../player/player.jsx';
import PrivateRoute from '../private-route/private-route.jsx';
import Review from '../review/review.jsx';
import withActiveTab from '../../hocs/with-active-tab/with-active-tab.jsx';
import withReviewForm from '../../hocs/with-review-form/with-review-form.jsx';


const WrappedFilm = withActiveTab(Film);
const WrappedReview = withReviewForm(Review);


const App = (props) => {
  const {
    films,
    promoFilm,
  } = props;

  return (
    <Router history={history}>
      <Switch>
        <Route path={AppRoute.ROOT} exact>
          <Main
            films={films}
            promoFilm={promoFilm}
          />
        </Route>
        <Route path={AppRoute.LOGIN} exact>
          <Login/>
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.MY_LIST}
          render={() => <MyList
            films={films.slice(4, 8)}
          />}
        />
        <Route path={`${AppRoute.FILMS}/:id/`} exact>
          <WrappedFilm
            alikeFilms={films.slice(2, 6)}
            defaultTab={FilmTabName.OVERVIEW}
            film={films[3]}
          />
        </Route>
        <Route path={`${AppRoute.FILMS}/:id/review`} exact>
          <WrappedReview
            film={films[4]}
          />
        </Route>
        <Route path={`${AppRoute.PLAYER}/:id`}>
          <Player/>
        </Route>
      </Switch>
    </Router>
  );
};


App.propTypes = {
  films: PropTypes.arrayOf(filmType),
  promoFilm: filmType,
};


const mapStateToProps = ({DATA}) => ({
  films: DATA.films,
  promoFilm: DATA.promoFilm,
});


export {App};
export default connect(mapStateToProps, null)(App);
