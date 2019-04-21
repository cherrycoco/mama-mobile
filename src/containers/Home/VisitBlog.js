import React from 'react';
import BlogCard from '../Blog/BlogCard';
import blogData from '../Blog/blogData';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import selectBlogPost from '../../actions/selectBlogPost';
import '../Blog/blog.css';

const VisitBlog = ({ selectBlogPost }) => (
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
  selectBlogPost: (blogPost) => {
    dispatch(selectBlogPost(blogPost))
  }
});

export default connect (
  mapStateToProps, 
  mapDispatchToProps
)(VisitBlog);
