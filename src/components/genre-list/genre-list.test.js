import React from 'react';
import renderer from 'react-test-renderer';
import GenreList from './genre-list.jsx';
import genresMock from '../../mocks/genre.js';


const noop = () => {};

it(`Should GenreList render correctly`, () => {
  const tree = renderer
    .create(
        <GenreList
          activeGenre={null}
          genres={genresMock}
          onGenreItemClick={noop}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
