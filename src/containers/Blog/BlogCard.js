import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

export default class BlogCard extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
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

  // handleClick = () => {
  //   this.setState((prevState) => ({
  //     click: !prevState.click,
  //   }));
  // }

  renderTag = () => {
    if (this.state.hover) {
      return (
        <div className='blog-card-tag onHover'>
          <h4>{this.props.blog.type}</h4>
          <h3>{this.props.blog.title}</h3>
        </div>
      )
    } else {
      return (
        <div className='blog-card-tag'>
          <h4>{this.props.blog.type}</h4>
          <h3>{this.props.blog.title}</h3>
        </div>
      )
    }
  }

  render() {
    return (
      <ScrollAnimation
        animatePreScroll
        animateIn="fadeIn"
        animateOnce
        animateOut="fadeOut"
      >
        <div className='blog-card-wrapper'
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          // onClick={this.handleClick}
        >
          <img src={this.props.blog.img} alt={this.props.blog.title} />
          {this.renderTag()}
        </div>
      </ScrollAnimation>
    );
  }
}
