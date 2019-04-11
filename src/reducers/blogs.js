import blogData from '../containers/Blog/blogData';

const blogs = (state = blogData, action) => {
  switch (action.type) {
    case 'FILTER_BLOG':
      return blogData.filter(blog => (blog.type === action.blogType));
    default:
      return state;
  }
}

export default blogs;