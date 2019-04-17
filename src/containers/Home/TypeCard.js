import React from 'react';
import Button from '../../components/Button/ButtonBasic';
import ScrollAnimation from 'react-animate-on-scroll';

class TypeCard extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      hover: false,
    }
  }

  handleMouseEnter = () => {
    this.setState({
      hover: true,
    });
  }

  handleMouseLeave = () => {
    this.setState({
      hover: false,
    });
  }

  render () {
    return (
      <ScrollAnimation
        animatePreScroll
        animateIn="slideInUp"
        animateOnce
      >
      <div 
        className='type-card'
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <img src={this.props.img} alt={this.props.alt}/>
        <h2>{this.props.title}</h2>

        <div className={this.state.hover ? 'type-card-description show-description' : 'type-card-description'}>
          <div className='type-card-paragraph'>
            <p>{this.props.description1}</p>
            <p>{this.props.description2}</p>
          </div>
          <div className='type-card-button'>
            <Button 
              content='BOOK NOW'
              buttonColor='white'
              color='#c68bbd'
            />
          </div>
        </div>
      </div>
      </ScrollAnimation>
    )
  }
}

export default TypeCard;