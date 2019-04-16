import React from 'react';
import { connect } from 'react-redux';
import Button from '../../components/Button/ButtonAnimated';
import ScrollAnimation from 'react-animate-on-scroll';
import LocationSelect from '../../components/LocationSelect/index';
import Subscribe from '../../components/Subscribe/index';

const locationsBooking = {
  Ottawa: 'https://mamamobilemassage.janeapp.com/locations/ottawa/book',
  Etobicoke: 'https://mamamobilemassage.janeapp.com/locations/etobicoke-missisagua-brampton/book',
  Missisagua: 'https://mamamobilemassage.janeapp.com/locations/etobicoke-missisagua-brampton/book',
  Brampton: 'https://mamamobilemassage.janeapp.com/locations/etobicoke-missisagua-brampton/book',
  Toronto: 'https://mamamobilemassage.janeapp.com/locations/downtown-toronto-midtown/book',
  Leslieville: 'https://mamamobilemassage.janeapp.com/locations/leslieville-danforth/book',
  Danforth: 'https://mamamobilemassage.janeapp.com/locations/leslieville-danforth/book',
  Oakville: 'https://mamamobilemassage.janeapp.com/locations/oakville/book',
  'North York': 'https://mamamobilemassage.janeapp.com/locations/north-york/book',
  Bolton: '',
  Caledon: '',
  Nobleton: '',
  Palgrave: '',
  'Richmond Hill': '',
  Thornhill: '',
  Vaughan: ''
}

const renderJane = (location) => (
  <form method='get' action={locationsBooking[location]}>
    <Button 
      content="BOOK NOW"
      icon="heart"
      center
    />
  </form> 
)

const renderButton = () => (
  <Subscribe />
)

const FirstImage = (props) => (
  <ScrollAnimation
    animatePreScroll
    animateIn="fadeInUp"
    animateOnce
  >
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
            {props.location !== "Don't see your city?" ? renderJane(props.location) : renderButton()}
          </div>
        </div>
      </div>
    </div>
  </ScrollAnimation>
)

const mapStateToProps = (state) => ({
  location: state.locationBooking
});

export default connect (mapStateToProps)(FirstImage);

