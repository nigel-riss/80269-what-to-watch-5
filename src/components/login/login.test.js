import React from 'react';
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';
import {Login} from './login.jsx';


const noop = () => {};

it(`Should Login render correctly`, () => {
  const tree = renderer
    .create(
        <MemoryRouter>
          <Login
            onSubmit={noop}
          />
        </MemoryRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
