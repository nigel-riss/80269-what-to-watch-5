import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import {Review} from './review.jsx';
import filmsMock from '../../mocks/films.js';
import storeMock from '../../mocks/store';


const mockStore = configureMockStore([]);
const store = mockStore(storeMock);
const noop = () => {};

it(`Should Review render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <MemoryRouter>
            <Review
              currentFilm={filmsMock[0]}
              isReviewInputLocked={false}
              getFilm={noop}
              filmId={1}
              onFormSubmit={noop}
              renderForm={noop}
            />
          </MemoryRouter>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
