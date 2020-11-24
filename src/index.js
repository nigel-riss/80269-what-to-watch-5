import React from 'react';
import ReactDOM from 'react-dom';
import {
  applyMiddleware,
  createStore,
} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createApi} from './services/api.js';
import App from './components/app/app.jsx';
import rootReducer from './store/reducers/root-reducer.js';
import {
  fetchFilms,
} from './store/api-actions.js';


const api = createApi(() => {});

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);


Promise.all([
  store.dispatch(fetchFilms()),
])
.then(() => {
  ReactDOM.render(
      <Provider store={store}>
        <App/>
      </Provider>,
      document.getElementById(`root`)
  );
});
