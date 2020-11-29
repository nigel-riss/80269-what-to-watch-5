import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import {MyList} from './my-list.jsx';
import filmsMock from '../../mocks/films.js';
import storeMock from '../../mocks/store';


const mockStore = configureMockStore([]);
const store = mockStore(storeMock);
const noop = () => {};

it(`Should MyList render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <MemoryRouter>
            <MyList
              favoriteFilms={filmsMock}
              getFilms={noop}
            />
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
