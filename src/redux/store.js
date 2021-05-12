import { createStore, applyMiddleware } from "redux";
import {persistStore} from 'redux-persist';

import logger from 'redux-logger';

import rootReducer from './root-reducer';

// putting the logger function inside an array, can add several othwer middleware functions too.
const middlewares = [];

if (process.env.NODE_ENV == 'development') {
        middlewares.push(logger);
}

// do not need to add seperate individual middlewares therefore providing abstraction to the number and names of the middle wares to be implemented
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default {store, persistor};
