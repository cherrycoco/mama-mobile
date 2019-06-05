import React from 'react';
import TeamMembers from './TeamMembers';
import { connect } from 'react-redux';
import Team from './Team';
import changeLocationTeam from '../../actions/changeLocationTeam';
import filterTeam from '../../actions/filterTeam';
import { Dropdown } from 'semantic-ui-react'

const locations = [
  'All', 
  'Toronto', 
  'Ottawa', 
  'Etobicoke', 
  'Missisauga', 
  'Brampton', 
  'Leslieville', 
  'Richmond Hill', 
  'Port Credit',
  'Thornhill', 
  'Vaughan', 
  'Bolton', 
  'Caledon', 
  'Palgrave', 
  'Nobleton',
  'North York'
];

const locationOptions = locations.map(location => ({
  key: location,
  text: location,
  value: location,
}));

const TeamSelect = ({ location, changeLocation, filterTeam }) => (
  <div>
    <div id='team-select'>
      <h5>Select your location:</h5>
      <Dropdown 
        style={{
          width: '100%',
          color: 'gray',
        }}
        placeholder='All' 
        search selection options={locationOptions} 
        onChange={
          (e, { value }) => {
            let filteredMembers = TeamMembers.filter(member => {
              if (member.location.includes(value)){
                return member;
              }
            });
          changeLocation(value); 
          filterTeam(filteredMembers);
          }
        } 
      />
    </div>
    <Team />
  </div>
)

const mapStateToProps = (state) => ({
  location: state.locationTeam
});

const mapDispatchToProps = dispatch => ({
  changeLocation: (location) => (
    dispatch(changeLocationTeam(location))
  ),
  filterTeam: (member) => (
    dispatch(filterTeam(member))
  )
});

export default connect (
  mapStateToProps, 
  mapDispatchToProps
)(TeamSelect);