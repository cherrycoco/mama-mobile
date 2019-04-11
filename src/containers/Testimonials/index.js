import React from 'react';
import { connect } from 'react-redux';
import img from '../../assets/baby2.jpg';
import imgActive from '../../assets/sarah.jpeg';
import avatar1 from '../../assets/sam.jpg';
import { Icon } from 'semantic-ui-react';
import selectTestimonial from '../../actions/selectTestimonial';
import CustomerAvatar from './CustomerAvatar';
import './testimonials.css';

const reviews = [
  'I’m so happy I found mama mobile. This is an amazing service for any parent who feels that they cannot take time out of their busy schedules to take care of themselves, and who would appreciate maintaining their health from within the comfort of their home.',
  'I sent Hubby & baby upstairs, dog flaked out on the couch, and closed the curtains. Once my body was on the massage table, I was transported. She had the spa music, comfortable blankets, and gave me an incredible massage. I soon forgot the pile of clean laundry I had forgotten on the chair, and that I was surrounded by my son’s toys, and my hip which has been bugging me since I gave birth feels so much better already.',
  'Great to be at home after kids are in bed. I am definitely going to re-book in the future. Highly recommended!'
];

const Testimonials = ({ testimonial, selectTestimonial }) => (
  <div 
    id='testimonial' 
    style={{backgroundImage: 
        `linear-gradient(
        rgba(255, 255, 255, 0.3), 
        rgba(255, 255, 255, 0.3)),
        url(${img})`
      }} 
  >
    <div className='testimonial-card'>
      <Icon name='quote left' size='big' />
      <p>{reviews[testimonial]}</p>
      <div id='customer-avatar-wrapper'>
        <div onClick={() => selectTestimonial(0)}>
          <CustomerAvatar active={testimonial === 0 ? true : false} img={avatar1} imgActive={imgActive} name='Cherry X' type='Postnatal' />
        </div>
        <div onClick={() => selectTestimonial(1)}>
          <CustomerAvatar active={testimonial === 1 ? true : false} img={avatar1} imgActive={imgActive} name='Cherry X' type='Postnatal' />
        </div>
        <div onClick={() => selectTestimonial(2)}>
          <CustomerAvatar active={testimonial === 2 ? true : false} img={avatar1} imgActive={imgActive} name='Cherry X' type='Postnatal' />
        </div>
      </div>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  testimonial: state.testimonials
});

const mapDispatchToProps = dispatch => ({
  selectTestimonial: (testimonial) => (
    dispatch(selectTestimonial(testimonial))
  )
});

export default connect (mapStateToProps, mapDispatchToProps)(Testimonials);
