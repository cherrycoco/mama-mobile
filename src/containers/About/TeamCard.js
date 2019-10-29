import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

export default class TeamCard extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      open: false,
    };
  }

  handleMouseEnter = (e) => {
    this.setState({
      hover: true,
    });
  }

  handleMouseLeave = () => {
    this.setState({
      hover: false,
    });
  }

  handleClick = () => {
    this.setState((prevState) => ({
      click: !prevState.click,
    }));
  }

  renderBio = () => (
    <div className={!this.state.click ? 'team-card-bio' : 'team-card-bio bio-show'}>
      {this.props.description.map((des, idx) => <p key={idx}>{des}</p>)}
      <p><b>Did you know?</b></p>
      <p>{this.props.funFact}</p>
    </div>
  )

  renderTag = () => {
    if (this.state.hover) {
      return (
        <div className='team-card-tag onHover' style={{backgroundColor: this.props.color}}>
          <h4>{this.props.title}</h4>
          <h3>{this.props.name}</h3>
          <h4>{this.props.location}</h4>
        </div>
      )
    } else {
      return (
        <div className='team-card-tag'>
          <h4>{this.props.title}</h4>
          <h3>{this.props.name}</h3>
          <h4>{this.props.location}</h4>
        </div>
      )
    }
  }

  render() {
    return (
      <ScrollAnimation
        animatePreScroll
        animateIn="slideInUp"
        animateOnce
      >
        <div className='team-card-wrapper'
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          onClick={this.handleClick}
        >
          <img src={this.props.img} alt={this.props.name} />
          {/* {this.renderTag()} */}
          {this.renderBio()}
        </div>
      </ScrollAnimation>
    );
  }
}
