import React from 'react';
import renderer from 'react-test-renderer';
import  from './';


it(`Should render correctly`, () => {
  const tree = renderer
    .create()
    .toJSON();

  expect(tree).toMatchSnapshot();
});
