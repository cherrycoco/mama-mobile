import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const HeroCorona = () => (
  <div
    className='hero'
    id='home-first-image'
    style=
      {{backgroundImage: 
        `linear-gradient(
        rgba(255, 255, 255, 0), 
        rgba(255, 255, 255, 0)),
        url(https://res.cloudinary.com/dhze7gimq/image/upload/v1584381060/hero_corona.jpg)`
      }}
  >
    <div className='hero-body'>
      <h2>bookings paused</h2>
      <p>with heavy hearts we have decided this temporary closure is in the best interest of our communities. If you require an emergency booking please email us. </p>
      <NavLink to='/blog/Bookings-Temporarily-Closed-Until-Further-Notice'>
        <button className='button-outline short center'>READ MORE</button>
      </NavLink>
    </div>
  </div>
)

const mapDispatchToProps = (dispatch) => ({
});

const mapStateToProps = (state) => ({
  location: state.locationBooking
});

export default connect (mapStateToProps, mapDispatchToProps)(HeroCorona);