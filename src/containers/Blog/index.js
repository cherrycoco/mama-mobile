import React from 'react';
import { connect } from 'react-redux';
import ScrollToTop from '../../components/ScrollTop/index';
import BlogCard from './BlogCard';
import filterBlog from '../../actions/filterBlog';

const Blog = ({ blogs, filterBlog}) => (
  <div id='blog-post-wrapper'>
    <ScrollToTop />
    <h1 className='title'>WELCOME TO MAMASPHERE!</h1>
    <div id='blog-select'>
      <button>Show All</button>
      <button>Educate</button>
      <button>Booking</button>
      <button>Mama Review</button>
    </div>
    <div className='clear-float' />
    <div id='blog-cards'>
      {blogs.map((blog, idx) => {
        return (<BlogCard blog={blog} key={idx} />)
      })}
    </div>
  </div>
)

const mapStateToProps = (state) => ({
  blogs: state.blogs
});

const mapDispatchToProps = dispatch => ({
  filterBlog: (blogType) => (
    dispatch(filterBlog(blogType))
  )
});

export default connect (
  mapStateToProps, 
  mapDispatchToProps
)(Blog);