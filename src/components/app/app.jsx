import React from 'react';
import PropTypes from 'prop-types';
import filmType from '../../types/film.js';
import {
  Router,
  Switch,
  Route,
} from 'react-router-dom';
import history from '../../history.js';
import Main from '../main/main.jsx';
import Login from '../login/login.jsx';
import MyList from '../mylist/mylist.jsx';
import Film from '../film/film.jsx';
import Review from '../review/review.jsx';
import Player from '../player/player.jsx';


const App = (props) => {
  const {
    promoFilm,
    films,
  } = props;

  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact>
          <Main
            promoFilm={promoFilm}
            films={films}
          />
        </Route>
        <Route path="/login" exact>
          <Login/>
        </Route>
        <Route path="/mylist" exact>
          <MyList
            films={films.slice(4, 8)}
          />
        </Route>
        <Route path="/films/:id" exact>
          <Film
            alikeFilms={films.slice(2, 6)}
            film={films[3]}
          />
        </Route>
        <Route path="/films/:id/review" exact>
          <Review
            film={films[4]}
          />
        </Route>
        <Route path="/player/:id">
          <Player/>
        </Route>
      </Switch>
    </Router>
  );
};


App.propTypes = {
  promoFilm: filmType,
  films: PropTypes.arrayOf(filmType),
};


export default App;
