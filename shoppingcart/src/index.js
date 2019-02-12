import React from 'react';
import ReactDOM from 'react-dom';
import { createStore , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.min.css' 
import allReducers from './reducers/all_reducers';

const store = createStore(allReducers,composeWithDevTools(
    applyMiddleware(thunk),
  ));

ReactDOM.render(
<Provider store={store}> 
    <App />
</Provider>, document.getElementById('root'));

serviceWorker.register();
