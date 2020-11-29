import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import {Main} from './main.jsx';
import filmsMock from '../../mocks/films.js';
import storeMock from '../../mocks/store';
import {FILMS_SHOWN_PER_CLICK} from '../../const.js';


const mockStore = configureMockStore([]);
const store = mockStore(storeMock);
const noop = () => {};

it(`Should Main render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <MemoryRouter>
            <Main
              activeGenre={`Action`}
              films={filmsMock}
              filmsByGenre={filmsMock.slice(0, 4)}
              itemsShownCount={FILMS_SHOWN_PER_CLICK}
              onGenreSelect={noop}
              onMoreButtonClick={noop}
              promoFilm={filmsMock[0]}
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
