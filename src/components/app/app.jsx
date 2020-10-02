import React from 'react';
import Main from '../main/main.jsx';
import PropTypes from 'prop-types';


const App = (props) => {
  const {
    movieName,
    movieGenre,
    movieYear,
  } = props;

  return (
    <Main
      movieName={movieName}
      movieGenre={movieGenre}
      movieYear={movieYear}
    />
  );
};


App.propTypes = {
  movieName: PropTypes.string.isRequired,
  movieGenre: PropTypes.string.isRequired,
  movieYear: PropTypes.number.isRequired,
};


export default App;
