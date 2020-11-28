import React from 'react';
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';
import {Film} from './film.jsx';
import filmsMock from '../../mocks/films.js';
import reviewsMock from '../../mocks/reviews.js';
import {
  AuthorizationStatus,
  FilmTabName,
} from '../../const.js';


const noop = () => {};


it(`Should Film render correctly`, () => {/
  const tree = renderer
    .create(
        <MemoryRouter>
          <Film
            activeTab={FilmTabName.OVERVIEW}
            authorizationStatus={AuthorizationStatus.NO_AUTH}
            currentFilm={filmsMock[0]}
            filmId={1}
            films={filmsMock}
            getFilm={noop}
            onTabClick={noop}
            reviews={reviewsMock}
          />
        </MemoryRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
