import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import PromoFilm from './promo-film.jsx';
import filmsMock from '../../mocks/films.js';
import storeMock from '../../mocks/store';


const mockStore = configureMockStore([]);
const store = mockStore(storeMock);

it(`Should PromoFilm render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <MemoryRouter>
            <PromoFilm
              film={filmsMock[0]}
            />
          </MemoryRouter>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
