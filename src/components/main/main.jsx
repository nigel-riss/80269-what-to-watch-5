import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
  getGenreList,
} from '../../utils/common.js';
import {setGenre} from '../../store/action.js';
import {selectFilmsByGenre} from '../../store/selector.js';
import filmType from '../../types/film.js';
import FilmList from '../film-list/film-list.jsx';
import Footer from '../footer/footer.jsx';
import GenreList from '../genre-list/genre-list.jsx';
import PromoFilm from '../promo-film/promo-film';
import withShowMore from '../../hocs/with-show-more/with-show-more.jsx';


const FilmListWrapped = withShowMore(FilmList);


const Main = (props) => {
  const {
    activeGenre,
    films,
    filmsByGenre,
    onGenreSelect,
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

          <FilmListWrapped
            films={filmsByGenre}
          />
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
  onGenreSelect: PropTypes.func.isRequired,
  promoFilm: filmType,
};


const mapStateToProps = ({APP, DATA}) => ({
  activeGenre: APP.genre,
  filmsByGenre: selectFilmsByGenre({APP, DATA}),
});

const mapDispatchToProps = (dispatch) => ({
  onGenreSelect(genre) {
    dispatch(setGenre(genre));
  }
});


export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
