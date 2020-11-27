import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
  getGenreList,
} from '../../utils/common.js';
import {
  incrementItemsShownCount,
  resetItemsShownCount,
  setGenre,
} from '../../store/actions/actions.js';
import {selectFilmsByGenre} from '../../store/selector.js';
import filmType from '../../types/film.js';
import FilmList from '../film-list/film-list.jsx';
import Footer from '../footer/footer.jsx';
import GenreList from '../genre-list/genre-list.jsx';
import MoreButton from '../more-button/more-button.jsx';
import PromoFilm from '../promo-film/promo-film';


const Main = (props) => {
  const {
    activeGenre,
    films,
    filmsByGenre,
    itemsShownCount,
    onGenreSelect,
    onMoreButtonClick,
    promoFilm,
  } = props;

  return (
    <React.Fragment>
      {promoFilm && <PromoFilm
        film={promoFilm}
      />}

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreList
            activeGenre={activeGenre}
            genres={getGenreList(films)}
            onGenreItemClick={(genre) => {
              onGenreSelect(genre);
            }}
          />

          <FilmList
            films={filmsByGenre.slice(0, itemsShownCount)}
          />

          {(filmsByGenre.length > itemsShownCount) && <MoreButton
            onClick={onMoreButtonClick}
          />}
        </section>

        <Footer/>
      </div>
    </React.Fragment>
  );
};


Main.propTypes = {
  activeGenre: PropTypes.string,
  films: PropTypes.arrayOf(filmType),
  filmsByGenre: PropTypes.arrayOf(filmType),
  itemsShownCount: PropTypes.number.isRequired,
  onGenreSelect: PropTypes.func.isRequired,
  onMoreButtonClick: PropTypes.func.isRequired,
  promoFilm: filmType,
};


const mapStateToProps = ({APP, DATA}) => ({
  activeGenre: APP.genre,
  films: DATA.films,
  filmsByGenre: selectFilmsByGenre({APP, DATA}),
  promoFilm: DATA.promoFilm,
  itemsShownCount: APP.itemsShownCount,
});


const mapDispatchToProps = (dispatch) => ({
  onGenreSelect(genre) {
    dispatch(setGenre(genre));
    dispatch(resetItemsShownCount());
  },

  onMoreButtonClick() {
    dispatch(incrementItemsShownCount());
  },
});


export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
