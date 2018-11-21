import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise'; // it worked without this, but how?
import ReduxThunk from 'redux-thunk'; 

import reducers from '../reducers';

/* eslint-disable  */
const createStoreWithMiddleware = applyMiddleware(promise, ReduxThunk)(createStore);
const store = createStoreWithMiddleware(
    reducers, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
 /* eslint-enable */
 
export default store;
