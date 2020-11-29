import React from 'react';
import {
  Router,
  Switch,
  Route,
} from 'react-router-dom';
import history from '../../history.js';
import {AppRoute} from '../../const.js';
import Film from '../film/film.jsx';
import Login from '../login/login.jsx';
import Main from '../main/main.jsx';
import MyList from '../my-list/my-list.jsx';
import Player from '../player/player.jsx';
import PrivateRoute from '../private-route/private-route.jsx';
import Review from '../review/review.jsx';
import withActiveTab from '../../hocs/with-active-tab/with-active-tab.jsx';
import withPlayer from '../../hocs/with-player/with-player.jsx';
import withReviewForm from '../../hocs/with-review-form/with-review-form.jsx';


const WrappedFilm = withActiveTab(Film);
const WrappedPlayer = withPlayer(Player);
const WrappedReview = withReviewForm(Review);


const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path={AppRoute.ROOT} exact>
          <Main/>
        </Route>
        <Route path={AppRoute.LOGIN} exact>
          <Login/>
        </Route>
        <PrivateRoute
          exact
          path={`${AppRoute.FILMS}/:id/review`}
          render={({match}) => (
            <WrappedReview
              filmId={+match.params.id}
            />
          )}
        />
        <Route
          exact
          path={`${AppRoute.FILMS}/:id/`}
          render={({match}) => (
            <WrappedFilm
              filmId={+match.params.id}
            />
          )}
        />
        <PrivateRoute
          exact
          path={AppRoute.MY_LIST}
          render={() => (
            <MyList/>
          )}
        />
        <Route
          exact
          path={`${AppRoute.PLAYER}/:id`}
          render={({match}) => (
            <WrappedPlayer
              filmId={+match.params.id}
            />
          )}
        />
      </Switch>
    </Router>
  );
};


export default App;
