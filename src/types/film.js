import PropTypes from 'prop-types';


export default PropTypes.shape({
  cover: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  genre: PropTypes.arrayOf(PropTypes.string).isRequired,
  year: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  votes: PropTypes.number.isRequired,
  details: PropTypes.shape({
    director: PropTypes.string.isRequired,
    actors: PropTypes.arrayOf(PropTypes.string).isRequired,
    length: PropTypes.shape({
      hours: PropTypes.number.isRequired,
      minutes: PropTypes.number.isRequired,
    }).isRequired,
  }),
});
