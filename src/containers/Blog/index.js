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
      <button onClick={() => filterBlog('all')}>Show All</button>
      <button onClick={() => filterBlog('Educate')}>Educate</button>
      <button onClick={() => filterBlog('Booking')}>Booking</button>
      <button onClick={() => filterBlog('Mama Review')}>Mama Review</button>
    </div>
    <div className='clear-float' />
    <div id='blog-cards'>
      {blogs.map((blog, idx) => {
        return (
          <Link onClick={()=>selectBlogPost(blog)} key={idx} to={`/blog/${blog.title}`}>
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