import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchFavoriteFilms} from '../../store/actions/api-actions.js';
import filmType from '../../types/film.js';
import FilmList from '../film-list/film-list.jsx';
import Footer from '../footer/footer.jsx';
import Logo from '../logo/logo.jsx';
import UserBlock from '../user-block/user-block.jsx';


const MyList = (props) => {
  const {
    favoriteFilms,
    getFilms,
  } = props;

  useEffect(() => {
    getFilms();
  });

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>

        <h1 className="page-title user-page__title">My list</h1>

        <UserBlock/>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmList
          films={favoriteFilms}
        />
      </section>

      <Footer/>
    </div>
  );
};


MyList.propTypes = {
  favoriteFilms: PropTypes.arrayOf(filmType).isRequired,
  getFilms: PropTypes.func.isRequired,
};


const mapStateToProps = ({DATA}) => ({
  favoriteFilms: DATA.favoriteFilms,
});

const mapDispatchToProps = (dispatch) => ({
  getFilms() {
    dispatch(fetchFavoriteFilms());
  },
});


export {MyList};
export default connect(mapStateToProps, mapDispatchToProps)(MyList);
