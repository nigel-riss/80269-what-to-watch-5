import React from 'react';
import renderer from 'react-test-renderer';
import Logo from './logo.jsx';
import {MemoryRouter} from 'react-router-dom';


it(`Should Logo render correctly`, () => {
  const tree = renderer
    .create(
        <MemoryRouter>
          <Logo
            isLight={true}
          />
        </MemoryRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
