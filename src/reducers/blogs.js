import blogData from '../containers/Blog/blogData';

const blogs = (state = blogData, action) => {
  switch (action.type) {
    case 'FILTER_BLOG':
      return blogData.filter(blog => {
        if (action.blogType === 'all') {
          return blog;
        } else {
          if (blog.type === action.blogType) {
            return blog;
          }
        }
      });
    default:
      return state;
  }
}

export default blogs;