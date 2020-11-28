import React from 'react';
import renderer from 'react-test-renderer';
import Player from './Player';


it(`Should Player render correctly`, () => {
  const tree = renderer
    .create(
        <Player/>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
