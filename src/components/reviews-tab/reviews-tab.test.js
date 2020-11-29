import React from 'react';
import renderer from 'react-test-renderer';
import ReviewsTab from './reviews-tab.jsx';
import reviewsMock from '../../mocks/reviews.js';


it(`Should render correctly`, () => {
  const tree = renderer
    .create(
        <ReviewsTab
          reviews={reviewsMock}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
