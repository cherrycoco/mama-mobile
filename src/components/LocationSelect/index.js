import React from 'react';
import { connect } from 'react-redux';
import { Dropdown, Icon } from 'semantic-ui-react'
import changeLocationBooking from '../../actions/changeLocationBooking';

const locations = [
  'Ajax',
  'Bolton', 
  'Brampton', 
  'Cambridge',
  'Caledon',
  'Danforth',
  'Etobicoke', 
  'Guelph',
  'Hamilton',
  'King City',
  'Leslieville',
  'Maple', 
  'Markham',
  'Mississauga',
  'Newmarket', 
  'Nobleton',
  'North York',
  'Ottawa',
  'Oshawa',
  'Oakville',
  'Palgrave', 
  'Pickering',
  'Port Credit',
  'Richmond Hill', 
  'Rosedale',
  'Scarborough',
  'Thornhill', 
  'Toronto',
  'Woodbridge',
  'Vaughan', 
  'Yorkville',
  "Don't see your city?"
];

const styles = {
  icon: {
    position: 'absolute',
    left: '10px',
    top: '15px',
    color: '#5f5f5f',
    zIndex: 1,
  },
  dropdown: {
    position: 'absolute',
    left: '32px',
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
  <div id='location-select'>
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
