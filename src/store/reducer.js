import films from '../mocks/films.js';


const initialState = {
  genre: null,
  films: films.slice(),
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ``:
      return state;
  }

  return state;
};

export {reducer};
