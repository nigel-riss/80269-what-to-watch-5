import React from 'react';
import renderer from 'react-test-renderer';
import DetailsTab from './details-tab.jsx';


const filmMock = {
  cover: ``,
  poster: ``,
  preview: ``,
  name: ``,
  genre: `Biography`,
  year: 2004,
  description: ``,
  rating: 7.5,
  votes: 274,
  details: {
    director: `Martin Scorsese`,
    actors: [
      `Leonardo DiCaprio`,
      `Cate Blanchett`,
      `Alec Baldwin`,
      `Kate Beckinsale`,
      `John C. Reilly`,
      `Alan Alda`,
      `Ian Holm`,
    ],
    length: {
      hours: 2,
      minutes: 50,
    },
  },
};


it(`Should render correctly`, () => {
  const tree = renderer
    .create(
        <DetailsTab
          film={filmMock}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
