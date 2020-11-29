import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import {Film} from './film.jsx';
import filmsMock from '../../mocks/films.js';
import reviewsMock from '../../mocks/reviews.js';
import storeMock from '../../mocks/store';
import {
  AuthorizationStatus,
  FilmTabName,
} from '../../const.js';


const mockStore = configureMockStore([]);
const store = mockStore(storeMock);
const noop = () => {};


it(`Should Film render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <MemoryRouter>
            <Film
              activeTab={FilmTabName.OVERVIEW}
              authorizationStatus={AuthorizationStatus.NO_AUTH}
              currentFilm={filmsMock[0]}
              filmId={1}
              films={filmsMock}
              getFilm={noop}
              onMyListButtonClick={noop}
              onTabClick={noop}
              reviews={reviewsMock}
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
