import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const BlogPostHeader = (props) => {
  const date = props.blog.date_created;

  return (
    <div id='blog-post-header'>
      <div id='blog-post-header-link'>
        <Link to='/blog'>Blog</Link>
        <Icon name='caret right' />
        <Link to='/blog'>{props.blog.type}</Link>
      </div>
      <h1>{props.blog.title}</h1>
      <div className='blog-header-author-date'>
        <h5>{props.blog.author}</h5>
        <span className='author-divider'>.</span>
        <h5>{`${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`}</h5>
      </div>
    </div>
  )
};

export default BlogPostHeader;