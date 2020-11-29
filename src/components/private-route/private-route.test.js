import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import PrivateRoute from './private-route.jsx';
import {
  AppRoute,
  AuthorizationStatus,
} from '../../const.js';
import storeMock from '../../mocks/store';


const mockStore = configureMockStore([]);
const store = mockStore(storeMock);
const noop = () => {};

it(`Should PrivateRoute render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <MemoryRouter>
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.AUTH}
              exact={true}
              path={AppRoute.MY_LIST}
              render={noop}
            />
          </MemoryRouter>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
