import React, {PureComponent} from 'react';


const DEFAULT_RATING = 3;


const withReviewForm = (Component) => {
  class WithReviewForm extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        rating: DEFAULT_RATING,
        text: ``,
      };

      this._handleRatingChange = this._handleRatingChange.bind(this);
      this._handleTextareaChange = this._handleTextareaChange.bind(this);
    }

    _handleRatingChange(rating) {
      this.setState({
        rating,
      });
    }

    _handleTextareaChange(e) {
      this.setState({
        text: e.target.value,
      });
    }


    render() {
      const {
        rating,
        text,
      } = this.state;

      return <Component
        {...this.props}
        renderForm={(onFormSubmit, isFormBlocked) => {
          return (
            <form
              action="#"
              className="add-review__form"
              onSubmit={(e) => {
                e.preventDefault();
                onFormSubmit(rating, text);
              }}
            >
              <div className="rating">
                <div className="rating__stars">
                  {Array(5).fill({}).map((_it, i) => <React.Fragment key={i}>
                    <input
                      className="rating__input"
                      disabled={isFormBlocked}
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
                  disabled={isFormBlocked}
                  name="review-text"
                  id="review-text"
                  placeholder="Review text"
                  value={text}
                  onChange={this._handleTextareaChange}
                ></textarea>
                <div className="add-review__submit">
                  <button
                    className="add-review__btn"
                    disabled={isFormBlocked}
                    type="submit"
                  >
                    Post
                  </button>
                </div>
              </div>
            </form>
          );
        }}
      />;
    }
  }

  return WithReviewForm;
};


export default withReviewForm;
