const filterBlog = (blogType) => {
  return {
    type: 'FILTER_BLOG',
    blogType
  }
}

export default filterBlog;