/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ScrollToTop from '../../components/ScrollTop/index';
import BlogCard from './BlogCard';
import filterBlog from '../../actions/filterBlog';
import selectBlogPost from '../../actions/selectBlogPost';

const Blog = ({ blogs, filterBlog, selectBlogPost}) => (
  <div id='blog-post-wrapper'>
    <Helmet>
        <title>Mama Mobile Massage | Blog</title>
        <meta name="description" content="Mama Mobile Massage delivers highest qualified Registered Massage Therapists to your home or office for your prenatal, postnatal, or busy mama massage." />
    </Helmet>
    <ScrollToTop />
    <h1 className='title'>WELCOME TO MAMASPHERE!</h1>
    <div id='blog-select'>
      <a className='underline' onClick={() => filterBlog('all')}>Show All</a>
      <a className='underline' onClick={() => filterBlog('Educate')}>Educate</a>
      <a className='underline' onClick={() => filterBlog('Booking')}>Booking</a>
      <a className='underline' onClick={() => filterBlog('Mama Story')}>Mama Story</a>
    </div>
    <div className='clear-float' />
    <div id='blog-cards'>
      {blogs.map((blog, idx) => {
        return (
          <Link onClick={()=>selectBlogPost(blog)} key={idx} to={`/blog/${blog.title.split(' ').join('_')}`}>
            <BlogCard blog={blog} />
          </Link>
        )
      })}
    </div>
  </div>
)

const mapStateToProps = (state) => ({
  blogs: state.blogs
});

const mapDispatchToProps = dispatch => ({
  filterBlog: (blogType) => {
    dispatch(filterBlog(blogType))
  },
  selectBlogPost: (blogPost) => {
    dispatch(selectBlogPost(blogPost))
  }
});

export default connect (
  mapStateToProps, 
  mapDispatchToProps
)(Blog);