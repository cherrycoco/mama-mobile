const isFirstLoad = (state = false, action) => {
  switch (action.type) {
    case 'CHANGE_FIRST_LOAD':
      return false;
    default:
      return state;
  }
}

export default isFirstLoad;