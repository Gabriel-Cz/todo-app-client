import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import usersReducer from './users/reducer';
import tasksReducer from './tasks/reducer';

const reducers = combineReducers({
    usersReducer,
    tasksReducer
});

const bindMiddleware = (middleware) => {
    if (process.env.NODE_ENV !== 'production') {
      const { composeWithDevTools } = require('redux-devtools-extension')
      return composeWithDevTools(applyMiddleware(...middleware))
    }
    return applyMiddleware(...middleware)
  }

export const store = createStore(reducers, bindMiddleware([thunkMiddleware]));