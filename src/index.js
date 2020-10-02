import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';


const Movie = {
  NAME: `Boys`,
  GENRE: `Superhero`,
  YEAR: 2019,
};


ReactDOM.render(
    <App
      movieName={Movie.NAME}
      movieGenre={Movie.GENRE}
      movieYear={Movie.YEAR}
    />,
    document.getElementById(`root`)
);
