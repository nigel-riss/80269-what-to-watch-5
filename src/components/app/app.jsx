import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Main from '../main/main.jsx';
import Login from '../login/login.jsx';
import MyList from '../mylist/mylist.jsx';
import Film from '../film/film.jsx';
import Review from '../review/review.jsx';
import Player from '../player/player.jsx';
import filmTypes from '../../types/film.js';


const App = (props) => {
  const {
    promoFilm,
    films,
  } = props;

  return (
    <Router>
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
          <MyList/>
        </Route>
        <Route path="/films/:id" exact>
          <Film/>
        </Route>
        <Route path="/films/:id/review" exact>
          <Review/>
        </Route>
        <Route path="/player/:id">
          <Player/>
        </Route>
      </Switch>
    </Router>
  );
};


App.propTypes = {
  promoFilm: filmTypes,
  films: PropTypes.arrayOf(filmTypes),
};


export default App;
