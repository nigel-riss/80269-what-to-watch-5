import React from 'react';
import renderer from 'react-test-renderer';
import FilmNav from './film-nav.jsx';
import {FilmTabName} from '../../const.js';

const noop = () => {};

it(`Should FilmNav render correctly`, () => {
  const tree = renderer
    .create(
        <FilmNav
          activeTab={FilmTabName.OVERVIEW}
          onTabClick={noop}
          tabNames={Object.values(FilmTabName)}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
