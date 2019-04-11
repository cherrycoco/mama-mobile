import React from 'react';
import { connect } from 'react-redux';
import { Image } from 'semantic-ui-react';

const CustomerAvatar = (props) => (
  <div className='customer-avatar'>
    <Image src={props.active ? props.imgActive : props.img} avatar />
    <div className={props.active ? 'customer-avatar-content active' : 'customer-avatar-content'}>
      <h4>{props.name}</h4>
      <h5>{props.type}</h5>
    </div>
  </div>
)

// const mapStateToProps = (state) => ({
//   testimonail: state.testimonials
// });

// export default connect (
//   mapStateToProps, 
//   mapDispatchToProps
// )(CustomerAvatar);

export default CustomerAvatar;