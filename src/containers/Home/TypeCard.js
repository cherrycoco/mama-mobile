import React from 'react';
import Button from '../../components/Button/ButtonBorder';

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
      <div 
        className='type-card'
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <img src={this.props.img} alt={this.props.alt}/>
        <h2>{this.props.title}</h2>

        <div className={this.state.hover ? 'type-card-description show-description' : 'type-card-description'}>
          <p>{this.props.description}</p>
          <div className='type-card-button'>
            <Button 
              content='BOOK NOW'
              buttonColor='white'
              color='#c68bbd'
            />
          </div>
        </div>
      </div>
    )
  }
}

export default TypeCard;