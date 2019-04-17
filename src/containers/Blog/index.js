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
      <button onClick={() => filterBlog('all')}>Show All</button>
      <button onClick={() => filterBlog('Educate')}>Educate</button>
      <button onClick={() => filterBlog('Booking')}>Booking</button>
      <button onClick={() => filterBlog('Mama Review')}>Mama Review</button>
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
  filterBlog: (blogType) => {
    console.log('filter');
    dispatch(filterBlog(blogType))
  }
});

export default connect (
  mapStateToProps, 
  mapDispatchToProps
)(Blog);