import React from 'react';
import renderer from 'react-test-renderer';
import {Player} from './Player';
import filmsMock from '../../mocks/films.js';

const ref = React.createRef();
const noop = () => {};

it(`Should Player render correctly`, () => {
  const tree = renderer
    .create(
        <Player
          currentFilm={filmsMock[0]}
          filmId={1}
          getFilm={noop}
          isLoading={false}
          isPlaying={true}
          onFullScreenClick={noop}
          onPlayPauseClick={noop}
          progress={33}
          progressRef={ref}
          videoRef={ref}
          timeElapsed={123}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
