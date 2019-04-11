import TeamMembers from '../containers/About/TeamMembers';

const team = (state = TeamMembers, action) => {
  switch (action.type) {
    case 'FILTER_TEAM':
      return action.team;
    default:
      return state;
  }
}

export default team;