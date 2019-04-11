const testimonials = (state = 1, action) => {
  switch (action.type) {
    case 'SELECT_TESTIMONIAL':
      return action.testimonial;
    default:
      return state;
  }
}

export default testimonials;