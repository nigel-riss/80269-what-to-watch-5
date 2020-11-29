import React from 'react';
import PropTypes from 'prop-types';
import renderer from 'react-test-renderer';
import {FilmCardOption} from '../../const.js';
import withDelayedHover from './with-delayed-hover.jsx';


const MockComponent = (props) => {
  const {
    children,
  } = props;

  return (
    <div>
      {children}
    </div>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

const MockComponentWrapped = withDelayedHover(MockComponent);


it(`Should withDelayedHover render correctly`, () => {
  const tree = renderer
    .create((
      <MockComponentWrapped
        hoverDelay={FilmCardOption.HOVER_DELAY}
      >
        <React.Fragment/>
      </MockComponentWrapped>
    ))
    .toJSON();

  expect(tree).toMatchSnapshot();
});
