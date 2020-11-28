import React from 'react';
import renderer from 'react-test-renderer';
import OverviewTab from './overview-tab.jsx';
import filmsMock from '../../mocks/films.js';


it(`Should OverviewTab render correctly`, () => {
  const tree = renderer
    .create(
        <OverviewTab
          film={filmsMock[0]}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
