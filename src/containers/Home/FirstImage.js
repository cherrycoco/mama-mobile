import React from 'react';
import { connect } from 'react-redux';
import Button from '../../components/Button/ButtonAnimated';
import changeLocationBooking from '../../actions/changeLocationBooking';
import LocationSelect from '../../components/LocationSelect/index';
import Subscribe from '../../components/Subscribe/index';
import BookingForm from '../../components/Subscribe/bookingForm';

const locationsJane = {
  Ottawa: 'https://mamamobilemassage.janeapp.com/locations/ottawa/book',
  // Etobicoke: 'https://mamamobilemassage.janeapp.com/locations/etobicoke/book',
  Brampton: 'https://mamamobilemassage.janeapp.com//locations/brampton-caledon/book',
  Caledon: 'https://mamamobilemassage.janeapp.com//locations/brampton-caledon/book',
  Toronto: 'https://mamamobilemassage.janeapp.com/locations/downtown-toronto-midtown/book',
  Scarborough: 'https://mamamobilemassage.janeapp.com/locations/scarborough/book',
  Leslieville: 'https://mamamobilemassage.janeapp.com/locations/leslieville-danforth/book',
  Danforth: 'https://mamamobilemassage.janeapp.com/locations/leslieville-danforth/book',
}

const renderBookButton = (location, changeLocation) => {
  if (location === "Don't see your city?") {
    return <Subscribe changeLocation={changeLocation} />;
  } else if (locationsJane[location] || location === '') {
    return (
      <form method='get' action={locationsJane[location]}>
        <Button 
          content="BOOK NOW"
          icon="heart"
          center
        />
      </form> 
    )
  } else {
    return <BookingForm />
  }
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
  >
    <div id='home-first-image-content'>
      <h1>{props.title}</h1>
      <div id='location'>
        <div id='location-select-wrapper'>
          <LocationSelect />
        </div>
        <div className='book-button'>
          {renderBookButton(props.location, props.changeLocationBooking)}
        </div>
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