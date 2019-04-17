import React from 'react';
import BlogCard from '../Blog/BlogCard';
import blogData from '../Blog/blogData';
import ScrollAnimation from 'react-animate-on-scroll';
import '../Blog/blog.css';

const VisitBlog = () => (
  <div id='visit-blog'>
    <ScrollAnimation
      animatePreScroll
      animateIn="slideInUp"
      animateOnce
    >
    <h1 className='title'>On Our Blog</h1>
    </ScrollAnimation>
    <div id='blog-cards' className='blog-cards-home'>
      {blogData.slice(0, 4).map((blog, idx) => {
        return (<BlogCard blog={blog} key={idx} />)
      })}
    </div>
  </div>
)

export default VisitBlog;
