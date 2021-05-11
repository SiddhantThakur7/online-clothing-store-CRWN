import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';

import rootReducer from './root-reducer';

// putting the logger function inside an array, can add several othwer middleware functions too.
const middlewares = [logger];

// do not need to add seperate individual middlewares therefore providing abstraction to the number and names of the middle wares to be implemented
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;