import { combineReducers } from 'redux';
import locationTeam from './locationTeam';
import locationBooking from './locationBooking';
import team from './team';
import testimonials from './testimonials';
import blogs from './blogs';

export default combineReducers({locationTeam, locationBooking, team, testimonials, blogs});