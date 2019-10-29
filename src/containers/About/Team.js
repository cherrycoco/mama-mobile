import React from 'react';
import { connect } from 'react-redux';
import ScrollAnimation from 'react-animate-on-scroll';
import TeamCard from './TeamCard';


// const colors= ['#59CAC0', '#F2A1B5', '#3D8CDE', '#663382', '#ED462F', '#87C717', '#ED4961'];
// const colors=['#ffb3ba', '#ffdfba', '#baffc9', '#bae1ff'];

const Team = ({ team }) => (
  <div id='team-cards'>
    {team.map((member, idx) => {
      return (
        <TeamCard 
          key={member.name}
          description={member.description}
          funFact={member.funFact}
          title={member.title}
          name={member.name}
          img={member.img} 
        />
      )
    })}
  </div>
);

const mapStateToProps = (state) => ({
  team: state.team
});

const mapDispatchToProps = dispatch => ({});

export default connect (mapStateToProps, mapDispatchToProps)(Team);