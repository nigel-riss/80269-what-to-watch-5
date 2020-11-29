import React from 'react';
import PropTypes from 'prop-types';
import renderer from 'react-test-renderer';
import withReviewForm from './with-review-form.jsx';


const noop = () => {};

const MockComponent = (props) => {
  const {
    children,
    renderForm,
  } = props;

  return (
    <React.Fragment>
      {children}
      {renderForm(noop)}
    </React.Fragment>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  renderForm: PropTypes.func.isRequired,
};

const MockComponentWrapped = withReviewForm(MockComponent);


it(`Should withReviewForm render correctly`, () => {
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
