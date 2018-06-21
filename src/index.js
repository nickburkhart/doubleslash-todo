import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import { App } from './App';
import rootReducer from './reducers';
import registerServiceWorker from './registerServiceWorker';

let middleware;
if (process.env.NODE_ENV !== 'production') {
    const logger = store => next => action => {
        console.log('dispatching', action)
        let result = next(action)
        console.log('next state', store.getState())
        return result
    };
    middleware = applyMiddleware(logger);
} else {
    middleware = applyMiddleware();
}


const store = createStore(rootReducer, middleware);

ReactDOM.render((
    <Provider store={store}>
        <App />
    </Provider>
), document.getElementById('root'));
registerServiceWorker();
