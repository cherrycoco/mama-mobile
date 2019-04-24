import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import TeamMembers from './containers/About/TeamMembers';
import blogData from './containers/Blog/blogData';
import rootReducer from './reducers/rootReducer';

const logger = ({ getState }) => {
  return next => action => {
    console.log('will dispatch', action);
    const returnValue = next(action);
    console.log('state after dispatch', getState());
    return returnValue;
  }
}

const initialState = {
  locationTeam: 'All',
  locationBooking: '',
  team: TeamMembers,
  testimonials: 1,
  blogs: blogData, 
  blogPost: blogData[0],
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(logger)));

export default store;