import React from 'react';
import { connect } from 'react-redux';
import { Dropdown, Icon } from 'semantic-ui-react'
import changeLocationBooking from '../../actions/changeLocationBooking';

const locations = [
  'Bolton', 
  'Brampton', 
  'Caledon',
  'Danforth',
  'Etobicoke', 
  'Toronto', 
  'Leslieville', 
  'Missisauga', 
  'Nobleton',
  'North York',
  'Ottawa',
  'Oakville',
  'Palgrave', 
  'Richmond Hill', 
  'Thornhill', 
  'Vaughan', 
  "Don't see your city?"
];

const styles = {
  root: {
    backgroundColor: 'white',
    width: '300px',
    height: '55px',
    padding: '10px',
    position: 'relative',
  },
  icon: {
    position: 'absolute',
    left: '10px',
    top: '20px',
    color: '#5f5f5f',
    zIndex: 1,
  },
  dropdown: {
    position: 'absolute',
    left: '35px',
    width: '260px',
    color: '#5f5f5f',
    border: 'none',
    fontSize: '16px',
  }
}

const locationOptions = locations.map(location => ({
  key: location,
  text: location,
  value: location,
}));

const LocationSelect = ({ location, changeLocation}) => (
  <div style={styles.root}>
    <Icon style={styles.icon} size='large' name='map marker alternate' />
    <Dropdown 
      style={styles.dropdown}
      placeholder='Enter your city' 
      search selection options={locationOptions} 
      onChange={
        (e, { value }) => {
          changeLocation(value);
        }
      } 
    />
  </div>
)

const mapStateToProps = (state) => ({
  location: state.locationBooking
});

const mapDispatchToProps = dispatch => ({
  changeLocation: (location) => (
    dispatch(changeLocationBooking(location))
  )
});

export default connect (
  mapStateToProps, 
  mapDispatchToProps
)(LocationSelect);
