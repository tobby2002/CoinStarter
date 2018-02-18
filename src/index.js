import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';

import {browserHistory, Router} from 'react-router';

import reducers from './reducers';
import routers from './router';
import promise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routers}/>
  </Provider>
  , document.querySelector('.container'));
