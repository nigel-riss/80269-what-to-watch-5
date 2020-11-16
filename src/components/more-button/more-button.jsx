import React from 'react';
import PropTypes from 'prop-types';


const MoreButton = (props) => {
  const {onButtonClick} = props;

  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={onButtonClick}
      >
        Show more
      </button>
    </div>
  );
};


MoreButton.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};

export default MoreButton;
