import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import filmType from '../../types/film.js';
import Logo from '../logo/logo.jsx';


const DEFAULT_RATING = 3;

class Review extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      rating: DEFAULT_RATING,
      text: ``,
    };

    this._handleTextareaChange = this._handleTextareaChange.bind(this);
    this._handleRatingChange = this._handleRatingChange.bind(this);
  }

  _handleTextareaChange(e) {
    this.setState({
      text: e.target.value,
    });
  }

  _handleRatingChange(rating) {
    this.setState({
      rating,
    });
  }

  render() {
    const {
      cover,
      poster,
      name,
    } = this.props.film;

    const {
      rating,
      text,
    } = this.state;

    return (
      <section className="movie-card movie-card--full">
        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img src={cover} alt={name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header">
            <Logo/>

            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link
                    to="/films/1"
                    className="breadcrumbs__link"
                  >
                    {name}
                  </Link>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>

            <div className="user-block">
              <div className="user-block__avatar">
                <img src="/img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </div>
          </header>

          <div className="movie-card__poster movie-card__poster--small">
            <img
              src={poster}
              alt={`${name} poster`}
              width="218"
              height="327"
            />
          </div>
        </div>

        <div className="add-review">
          <form
            action="#"
            className="add-review__form"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="rating">
              <div className="rating__stars">
                {Array(5).fill({}).map((it, i) => <React.Fragment key={i}>
                  <input
                    className="rating__input"
                    id={`star-${i + 1}`}
                    type="radio"
                    name="rating"
                    value={i + 1}
                    checked={rating === i + 1}
                    onChange={() => {
                      this._handleRatingChange(i + 1);
                    }}
                  />
                  <label
                    className="rating__label"
                    htmlFor={`star-${i + 1}`}
                  >
                    Rating {i + 1}
                  </label>
                </React.Fragment>)}
              </div>
            </div>

            <div className="add-review__text">
              <textarea
                className="add-review__textarea"
                name="review-text"
                id="review-text"
                placeholder="Review text"
                value={text}
                onChange={this._handleTextareaChange}
              ></textarea>
              <div className="add-review__submit">
                <button className="add-review__btn" type="submit">Post</button>
              </div>
            </div>
          </form>
        </div>

      </section>
    );
  }
}


Review.propTypes = filmType;


export default Review;
