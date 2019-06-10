/**
 * Create the store with dynamic reducers
 */

import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import createReducer from './../reducers/index';

const logger = createLogger({
  collapsed: true,
});

export default function configureStore(initialState = {}, history) {
  // Create the store with two middlewares
  // 2. routerMiddleware: Syncs the location/URL path to the state
  const middlewares = [thunk, routerMiddleware(history), logger];

  const enhancers = [applyMiddleware(...middlewares)];

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle, indent */
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;
  /* eslint-enable */

  const store = createStore(createReducer(), initialState, composeEnhancers(...enhancers));

  // Extensions
  store.injectedReducers = {}; // Reducer registry

  // Make reducers hot reloadable, see http://mxs.is/googmo
  /* istanbul ignore next */
  if (module.hot) {
    module.hot.accept('./../reducers/index.js', () => {
      store.replaceReducer(createReducer(store.injectedReducers));
    });
  }

  return store;
}
