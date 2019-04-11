const locationBooking = (state = "", action) => {
  switch (action.type) {
    case 'CHANGE_LOCATION_BOOKING':
      return action.location;
    default:
      return state;
  }
}

export default locationBooking;