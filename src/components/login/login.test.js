import React from 'react';
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';
import {Login} from './login.jsx';
import {AuthorizationStatus} from '../../const.js';


const noop = () => {};

it(`Should Login render correctly`, () => {
  const tree = renderer
    .create(
        <MemoryRouter>
          <Login
            authorizationStatus={AuthorizationStatus.NO_AUTH}
            loginErrorMessage={`Error message`}
            onAuthorized={noop}
            onInputError={noop}
            onSubmit={noop}
          />
        </MemoryRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
