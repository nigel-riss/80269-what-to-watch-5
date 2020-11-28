import React from 'react';
import renderer from 'react-test-renderer';
import FilmCard from './film-card.jsx';
import filmsMock from '../../mocks/films.js';


const noop = () => {};

it(`Should render correctly`, () => {
  const tree = renderer
    .create(
        <FilmCard
          film={filmsMock[0]}
          isHovered={false}
          onMouseEnter={noop}
          onMouseLeave={noop}
          renderVideo={noop}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
