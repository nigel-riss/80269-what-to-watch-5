import React from 'react';
import renderer from 'react-test-renderer';
import MoreButton from './more-button.jsx';


const noop = () => {};

it(`Should MoreButton render correctly`, () => {
  const tree = renderer
    .create(
        <MoreButton
          onClick={noop}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
