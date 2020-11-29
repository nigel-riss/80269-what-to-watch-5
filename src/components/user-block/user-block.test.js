import React from 'react';
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';
import {UserBlock} from './user-block.jsx';
import {AuthorizationStatus} from '../../const.js';


const noop = () => {};

it(`Should UserBlock render correctly`, () => {
  const tree = renderer
    .create(
        <MemoryRouter>
          <UserBlock
            authorizationStatus={AuthorizationStatus.AUTH}
            onAvatarClick={noop}
            userAvatarUrl={`/img/avatar.png`}
          />
        </MemoryRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
