import { combineReducers } from 'redux';
import locationTeam from './locationTeam';
import locationBooking from './locationBooking';
import team from './team';
import testimonials from './testimonials';
import blogs from './blogs';
import blogPost from './blogPost';
import isFirstLoad from './isFirstLoad';

export default combineReducers({locationTeam, blogPost, locationBooking, team, testimonials, blogs, isFirstLoad});