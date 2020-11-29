import React from 'react';
import PropTypes from 'prop-types';
import renderer from 'react-test-renderer';
import withVideo from './with-video.jsx';


const MockComponent = (props) => {
  const {
    children,
    renderVideo,
  } = props;

  return (
    <React.Fragment>
      {children}
      {renderVideo({
        src: ``,
        poster: ``,
        height: 100,
        width: 200,
        isPlaying: false,
      })}
    </React.Fragment>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  renderVideo: PropTypes.func.isRequired,
};

const MockComponentWrapped = withVideo(MockComponent);


it(`Should  is rendered correctly`, () => {
  const tree = renderer
    .create((
      <MockComponentWrapped/>
    ), {
      createNodeMock() {
        return {};
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
