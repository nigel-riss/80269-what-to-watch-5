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


const App = (props) => {
  const {
    movieName,
    movieGenre,
    movieYear,
  } = props;

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Main
            movieName={movieName}
            movieGenre={movieGenre}
            movieYear={movieYear}
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
  movieName: PropTypes.string.isRequired,
  movieGenre: PropTypes.string.isRequired,
  movieYear: PropTypes.number.isRequired,
};


export default App;
