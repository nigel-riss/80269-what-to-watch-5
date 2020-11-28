import React from 'react';
import renderer from 'react-test-renderer';
import DetailsTab from './details-tab.jsx';
import filmsMock from '../../mocks/films.js';


it(`Should DetailsTab render correctly`, () => {
  const tree = renderer
    .create(
        <DetailsTab
          film={filmsMock[0]}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
