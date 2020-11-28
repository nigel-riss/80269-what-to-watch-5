import React from 'react';
import renderer from 'react-test-renderer';
import FilmList from './film-list.jsx';
import filmsMock from '../../mocks/films.js';


it(`Should FilmList render correctly`, () => {
  const tree = renderer
    .create(
        <FilmList
          films={filmsMock}
        />, {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
