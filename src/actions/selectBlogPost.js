const selectBlogPost = (blogPost) => {
  return {
    type: 'SELECT_BLOGPOST',
    blogPost
  }
}

export default selectBlogPost;