import React from 'react';
import { connect } from 'react-redux';
import img from '../../assets/baby2.jpg';
import imgActive from '../../assets/sarah.jpeg';
import ella from '../../assets/review-ella.png';
import ellaBW from '../../assets/review-ella-bw.jpg';
import vanessa from '../../assets/review-vanessa.png';
import vanessaBW from '../../assets/review-vanessa-bw.jpg';
import madeline from '../../assets/review-madeline.jpeg';
import madelineBW from '../../assets/review-madeline-bw.jpg';
import { Icon } from 'semantic-ui-react';
import selectTestimonial from '../../actions/selectTestimonial';
import CustomerAvatar from './CustomerAvatar';
import './testimonials.css';

const reviews = [
  'This service made it so easy to schedule a session as we were told that extra time is allotted for feedings or fussiness so I felt comfortable knowing there would be some flexibility there plus we’re at home with all the conveniences baby may need and where we’re all most comfortable.',
  'Being on bedrest and 37 weeks pregnant I was dying for some sort of relaxation, but not being able to leave the house made me feeling that would be impossible. It was amazing to have this service brought to my own home.',
  'She arrived post kiddie-bedtime, was friendly and professional and even stepped over our two large dogs who insisted on lying under the massage table. We both felt great during and after our massages. Highly recommended! 🙌🏻'
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
          <CustomerAvatar active={testimonial === 0 ? true : false} img={ellaBW} imgActive={ella} name='Ella' type='Postnatal' />
        </div>
        <div onClick={() => selectTestimonial(1)}>
          <CustomerAvatar active={testimonial === 1 ? true : false} img={vanessaBW} imgActive={vanessa} name='Vanessa' type='Prenatal' />
        </div>
        <div onClick={() => selectTestimonial(2)}>
          <CustomerAvatar active={testimonial === 2 ? true : false} img={madelineBW} imgActive={madeline} name='Madeline' type='Postnatal' />
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
