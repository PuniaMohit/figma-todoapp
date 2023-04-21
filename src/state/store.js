// import{createStore} from 'redux';
// import reducers from './reducers';


// export const store=createStore(reducers)


import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

// Define the custom middleware
const myCustomMiddleware = store => next => action => {
  console.log('Action:', action); // Log the action
  const result = next(action); // Call the next middleware or dispatch the action
  console.log('State:', store.getState()); // Log the state after the action is dispatched
  return result;
};

// Apply the middleware to the store
const store = createStore(
  reducers,
  applyMiddleware(myCustomMiddleware)
);

export default store;