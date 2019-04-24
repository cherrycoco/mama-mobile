import React from 'react';
import { connect } from 'react-redux';
import ScrollToTop from '../../components/ScrollTop/index';
import FirstImage from './FirstImage';
import './index.css';
import imageOne from '../../assets/main-img.jpg';
import MamaType from './MamaType';
import SeenOn from './SeenOn';
import VisitBlog from './VisitBlog';
import GiftCertificate from './GiftCertificate';
import Testimonial from '../Testimonials/index';
import UpcomingEvents from './UpcomingEvents';
import FAQ from '../FAQ/index';
import Prices from './Prices';
import HowItWorks from './HowItWorks';
import ScrollAnimation from 'react-animate-on-scroll';

const Home = () => (
  <div>
    <ScrollToTop />
    <FirstImage 
      img={imageOne}
      title='Delivering massage to mamas who need it most.'
    />
    <SeenOn />
    <HowItWorks />
    <MamaType />
    <Prices />
    <FAQ />
    <ScrollAnimation
      animatePreScroll
      animateIn="slideInUp"
      animateOnce
    >
      <h1 className='title testimonial-title'>What Our Mama Tribe Says!</h1>
    </ScrollAnimation>
    <ScrollAnimation
      animatePreScroll
      animateIn="slideInUp"
      animateOnce
    >
      <Testimonial />
    </ScrollAnimation>
    <ScrollAnimation
      animatePreScroll
      animateIn="slideInUp"
      animateOnce
    >
      <UpcomingEvents />
    </ScrollAnimation>
    <ScrollAnimation
      animatePreScroll
      animateIn="slideInUp"
      animateOnce
    >
      <GiftCertificate />
    </ScrollAnimation>
    <VisitBlog />
  </div>
)

export default Home;