import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {MemoryRouter} from "react-router-dom";
import configureMockStore from 'redux-mock-store';
import App from './app.jsx';
import storeMock from '../../mocks/store';


const mockStore = configureMockStore([]);
const store = mockStore(storeMock);


it(`Should App render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <MemoryRouter>
            <App/>
          </MemoryRouter>
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
