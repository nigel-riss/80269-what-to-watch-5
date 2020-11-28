import React from 'react';
import renderer from 'react-test-renderer';
import Comment from './comment.jsx';


it(`Should Comment render correctly`, () => {
  const tree = renderer
    .create(
        <Comment
          date="2020-11-03T13:38:44.769Z"
          name="John Doe"
          rating={8.5}
          text="This is mock comment"
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
