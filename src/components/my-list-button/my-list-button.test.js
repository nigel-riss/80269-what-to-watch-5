import React from 'react';
import renderer from 'react-test-renderer';
import MyListButton from './my-list-button.jsx';


const noop = () => {};

it(`Should MyListButton render correctly`, () => {
  const tree = renderer
    .create(
        <MyListButton
          isFavorite={true}
          onClick={noop}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
