import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import filmType from '../../types/film.js';
import MoreButton from '../../components/more-button/more-button.jsx';


const FILMS_SHOWN_PER_CLICK = 8;


const withShowMore = (Component) => {
  class WithShowMore extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        itemsShownCount: FILMS_SHOWN_PER_CLICK,
      };

      this._handleButtonClick = this._handleButtonClick.bind(this);
    }

    _handleButtonClick() {
      this.setState((state) => ({
        itemsShownCount: state.itemsShownCount + FILMS_SHOWN_PER_CLICK,
      }));
    }

    render() {
      const {itemsShownCount} = this.state;
      const {films} = this.props;

      return (
        <React.Fragment>
          <Component
            {...this.props}
            films={films.slice(0, itemsShownCount)}
          />

          {(films.length > itemsShownCount) && <MoreButton
            onButtonClick={this._handleButtonClick}
          />}
        </React.Fragment>
      );
    }
  }


  WithShowMore.propTypes = {
    films: PropTypes.arrayOf(filmType),
  };

  return WithShowMore;
};


export default withShowMore;
