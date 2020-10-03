import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Main from '../main/main.jsx';


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
