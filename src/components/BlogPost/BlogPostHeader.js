import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

const date = new Date();
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const blog = {
  title: '‘Queer Eye’ Addicts: Here’s Everything You Need to Know About the Fab Five’s New Loft',
  date: new Date(),
  type: 'Educate',
  author: 'Allison Collins',
}

const BlogPostHeader = (props) => {
  const date = blog.date;

  return (
    <div id='blog-post-header'>
      <div id='blog-post-header-link'>
        <Link to='/blog'>Blog</Link>
        <Icon name='caret right' />
        <Link to='/blog'>{blog.type}</Link>
      </div>
      <h1>{blog.title}</h1>
      <div className='blog-header-author-date'>
        <h5>{blog.author}</h5>
        <span className='author-divider'>.</span>
        <h5>{`${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`}</h5>
      </div>
    </div>
  )
};

export default BlogPostHeader;