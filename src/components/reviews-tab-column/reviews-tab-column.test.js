import React from 'react';
import renderer from 'react-test-renderer';
import ReviewsTabColumn from './reviews-tab-column.jsx';
import reviewsMock from '../../mocks/reviews.js';


it(`Should ReviewTabColumn render correctly`, () => {
  const tree = renderer
    .create(
        <ReviewsTabColumn
          reviews={reviewsMock}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
