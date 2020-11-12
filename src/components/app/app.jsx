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
import {getGenreList} from '../../utils.js';
import {ActionCreator} from '../../store/action.js';
import Main from '../main/main.jsx';
import Login from '../login/login.jsx';
import MyList from '../mylist/mylist.jsx';
import Film from '../film/film.jsx';
import Review from '../review/review.jsx';
import Player from '../player/player.jsx';


const App = (props) => {
  const {
    activeFilms,
    activeGenre,
    films,
    onGenreSelect,
  } = props;

  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact>
          <Main
            activeGenre={activeGenre}
            films={activeFilms}
            genres={getGenreList(films)}
            promoFilm={films[0]}
            onGenreSelect={onGenreSelect}
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
  activeGenre: PropTypes.string.isRequired,
  activeFilms: PropTypes.arrayOf(filmType),
  onGenreSelect: PropTypes.func.isRequired,
  films: PropTypes.arrayOf(filmType),
};


const mapStateToProps = (state) => ({
  activeFilms: state.activeFilms,
  activeGenre: state.genre,
  films: state.films,
});

const mapDispatchToProps = (dispatch) => ({
  onGenreSelect(genre) {
    dispatch(ActionCreator.selectGenre(genre));
    dispatch(ActionCreator.selectFilms(genre));
  }
});


export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
