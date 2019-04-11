const locationTeam = (state = "All", action) => {
  switch (action.type) {
    case 'CHANGE_LOCATION_TEAM':
      return action.location;
    default:
      return state;
  }
}

export default locationTeam;