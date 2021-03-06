import React from 'react';
import { connect } from 'react-redux';
import changeLocationBooking from '../../actions/changeLocationBooking';
import LocationSelect from '../../components/LocationSelect/index';
import Subscribe from '../../components/Subscribe/index';
import BookingForm from '../../components/Subscribe/bookingForm';

const locationsJane = {
  Ottawa: 'https://www.booking.mamamobilemassage.com/',
  Etobicoke: 'https://mamamobilemassage.janeapp.com/locations/etobicoke/book',
  Brampton: 'https://mamamobilemassage.janeapp.com//locations/brampton-caledon/book',
  Caledon: 'https://mamamobilemassage.janeapp.com//locations/brampton-caledon/book',
  Toronto: 'https://mamamobilemassage.janeapp.com/locations/downtown-toronto-midtown-toronto/book',
  Scarborough: 'https://mamamobilemassage.janeapp.com/locations/scarborough/book',
  Leslieville: 'https://mamamobilemassage.janeapp.com/locations/leslieville-danforth/book',
  Danforth: 'https://mamamobilemassage.janeapp.com/locations/leslieville-danforth/book',
}

const renderBookButton = (location, changeLocation) => {
  // if (location === "Don't see your city?") {
  //   return <Subscribe changeLocation={changeLocation} />;
  // } else if (locationsJane[location] || location === '') {
    return (
      <form method='get' action='https://www.booking.mamamobilemassage.com'>
        <button
          className='button-outline'
          id='select-location-button'
        >
          BOOK
        </button>
      </form> 
    )
  // } else {
  //   return <BookingForm />
  // }
}

const FirstImage = (props) => (
  <div 
    id='home-first-image' 
    style=
      {{backgroundImage: 
        `linear-gradient(
        rgba(255, 255, 255, 0), 
        rgba(255, 255, 255, 0)),
        url(${props.img})`
      }} 
    aria-label='Postnatal mom with her baby on a bed'
  >
    <div id='home-first-image-content'>
      <h1>{props.title}</h1>
      <div className='location'>
        {/* <LocationSelect /> */}
        {/* {renderBookButton(props.location, props.changeLocationBooking)} */}
        <form type='get' action='https://www.booking.mamamobile.com'>
          <button className='location-button button-outline'>BOOK NOW</button>
        </form>
      </div>
    </div>
  </div>
)

const mapDispatchToProps = (dispatch) => ({
  changeLocationBooking: (location) => (
    dispatch(changeLocationBooking(location))
  )
});

const mapStateToProps = (state) => ({
  location: state.locationBooking
});

export default connect (mapStateToProps, mapDispatchToProps)(FirstImage);