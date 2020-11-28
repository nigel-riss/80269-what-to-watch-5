import React from 'react';
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';
import Footer from './footer.jsx';


it(`Should Footer render correctly`, () => {
  const tree = renderer
    .create(
        <MemoryRouter>
          <Footer/>
        </MemoryRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
