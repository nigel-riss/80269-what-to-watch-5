import React from 'react';
import ReactDOM from 'react-dom';
import {
  applyMiddleware,
  createStore,
} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {redirect} from './store/middlewares/redirect.js';
import {createApi} from './services/api.js';
import App from './components/app/app.jsx';
import rootReducer from './store/reducers/root-reducer.js';
import {requireAuthorization} from './store/actions/actions.js';
import {
  checkAuth,
  fetchFilms,
  fetchPromo,
} from './store/actions/api-actions.js';
import {AuthorizationStatus} from './const.js';


const api = createApi(() => {
  store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
});

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);


Promise.all([
  store.dispatch(checkAuth()),
  store.dispatch(fetchFilms()),
  store.dispatch(fetchPromo()),
])
.then(() => {
  ReactDOM.render(
      <Provider store={store}>
        <App/>
      </Provider>,
      document.getElementById(`root`)
  );
});
