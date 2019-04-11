import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

export default class TeamCard extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      bio: ['bio'],
      open: false,
    };
  }

  componentWillMount () {
    this.setState({
      bio: this.props.description
    })
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
    <div className={!this.state.click ? 'team-card-bio' : 'team-card-bio bio-show'} style={{backgroundColor: this.props.color}}>
      <p>{this.state.bio[0]}</p>
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

  displayContent() {
    return (
      <div  className='team-card-hover'>
        <div className='team-card-bio'>
          {
            this.state.bio.map((line, idx) => {
              return <p key={idx}>{line}</p>})
          }
        </div>
      </div>
    );
  }

  render() {
    return (
      <ScrollAnimation
        animatePreScroll
        animateIn="fadeIn"
        animateOnce
        animateOut="fadeOut"
      >
        <div className='team-card-wrapper'
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          onClick={this.handleClick}
        >
          <img src='https://www.madwell.com/wp-content/uploads/2018/01/Jessica_Auville.jpg' alt={this.props.name} />
          {this.renderTag()}
          {this.renderBio()}
        </div>
      </ScrollAnimation>
    );
  }
}
