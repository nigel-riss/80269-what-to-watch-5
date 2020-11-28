import React from 'react';
import renderer from 'react-test-renderer';
import FilmNavItem from './film-nav-item.jsx';
import {FilmTabName} from '../../const.js';


const noop = () => {};

it(`Should FilmNavItem render correctly`, () => {
  const tree = renderer
    .create(
        <FilmNavItem
          isActive={true}
          name={FilmTabName.OVERVIEW}
          onClick={noop}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
