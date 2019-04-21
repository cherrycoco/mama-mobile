import React from 'react';
import { connect } from 'react-redux';
import BlogPostHeader from './BlogPostHeader';
import selectBlogPost from '../../actions/selectBlogPost';
import './blogPost.css';
import ScrollToTop from '../ScrollTop';

const BlogPost = ({blog}) => (
  <div>
    <ScrollToTop />
    <BlogPostHeader blog={blog} />
    <div className='blog-post-body'>
      {blog.blogPost.map(component => {
        switch(component.type) {
          case 'h3':
            return <h3 className='blog-post-h3'>{component.content}</h3>;
          case 'p':
            return <p className='blog-post-p'>{component.content}</p>;
          case 'p_bold':
            return <p className='blog-post-p'><b>{component.content}</b></p>;
          case 'p_arr':
            return component.content.map(paragraph => <p className='blog-post-p'>{paragraph}</p>);
          case 'video':
            return (
              <div className='blog-post-video'>
                <iframe style={{position:'absolute', top:0, left:0, width:'100%', height:'100%'}} src={component.content} frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            )
          case 'li': 
              return component.content.map(list => <p className='blog-post-p blog-post-li'>{list}</p>);
          case 'img':
            return <img className='blog-post-img' src={component.content} alt={component.alt} />;
          case 'quote':
            return <h5 className='blog-post-quote'>{component.content}</h5>
            case 'a':
            return <a href={component.content} target='_blank' className='blog-post-link'>{component.text}</a>        
          case 'img-fullSize':
            return <img className='blog-post-imgFull' src={component.content} alt={component.alt} />   
          default:
            return;
        }
      })}
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  blog: state.blogPost
});

const mapDispatchToProps = dispatch => ({
  selectblogPost: (blog) => (
    dispatch(selectBlogPost(blog))
  )
});

export default connect (mapStateToProps, mapDispatchToProps)(BlogPost);
