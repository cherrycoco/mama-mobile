import React from 'react';
import { connect } from 'react-redux';
import BlogPostHeader from './BlogPostHeader';
import selectBlogPost from '../../actions/selectBlogPost';
import './blogPost.css';
import ScrollToTop from '../ScrollTop';
import { useParams } from "react-router";
import BlogData from '../../containers/Blog/blogData';

const BlogPost = ({ blog }) => {
  let { title } = useParams();
  blog = BlogData.filter(blog => blog.title.split(' ').join('-') === title)[0];

  return (
    <div>
      <ScrollToTop />
      <BlogPostHeader blog={blog} />
      <div className='blog-post-body'>
        {blog.blogPost.map(component => {
          switch(component.type) {
            case 'h3':
              return <h3 className='blog-post-h3'>{component.content}</h3>;
            case 'br':
              return <br/>;
            case 'p_with_link':
              return component.content.map((text, idx) => {
                if (typeof(text) === 'string') {
                  return <span className='blog-post-p'>{text}</span>
                } if (text.type === 'br') {
                  return <br/>
                }
                return <a target='_blank' href={text.link}>{text.content}</a>
              });
            case 'p':
              return <p className='blog-post-p'>{component.content}</p>;
            case 'p_bold':
              return <p className='blog-post-p'><b>{component.content}</b></p>;
            case 'p_bold_noMargin':
            return <p className='blog-post-p noMargins'><b>{component.content}</b></p>;
            case 'p_noMargin':
            return <p className='blog-post-p noMargins'>{component.content}</p>;
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
              return <a className='underline' href={component.content} target='_blank'>{component.text}</a>        
            case 'img-fullSize':
              return <img className='blog-post-imgFull' src={component.content} alt={component.alt} />   
            default:
              return;
          }
        })}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  blog: state.blogPost
});

const mapDispatchToProps = dispatch => ({
  selectblogPost: (blog) => (
    dispatch(selectBlogPost(blog))
  )
});

export default connect (mapStateToProps, mapDispatchToProps)(BlogPost);
