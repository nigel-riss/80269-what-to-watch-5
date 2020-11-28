import React from 'react';
import renderer from 'react-test-renderer';
import GenreListItem from './genre-list-item.jsx';


const noop = () => {};

it(`Should GenreListItem render correctly`, () => {
  const tree = renderer
    .create(
        <GenreListItem
          isActive={true}
          genre={null}
          onClick={noop}
          title={`All genres`}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
