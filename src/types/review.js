import PropTypes from 'prop-types';


export default PropTypes.shape({
  date: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  text: PropTypes.number.isRequired,
});
