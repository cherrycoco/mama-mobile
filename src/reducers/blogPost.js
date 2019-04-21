const blogPost = (state = {}, action) => {
  switch (action.type) {
    case 'SELECT_BLOGPOST':
      return action.blogPost;
    default:
      return state;
  }
}

export default blogPost;