import React from 'react';
import ScrollToTop from '../../components/ScrollTop/index';
import FirstImage from './FirstImage';
import './index.css';
import imageOne from '../../assets/main-img.jpg';
import MamaType from './MamaType';
import SeenOn from './SeenOn';
import HeroCorona from './HeroCorona';
import VisitBlog from './VisitBlog';
import GiftCertificate from './GiftCertificate';
import { Helmet } from "react-helmet";
import Testimonial from '../Testimonials/index';
import UpcomingEvents from './UpcomingEvents';
import FAQ from '../FAQ/index';
import Prices from './Prices';
import HowItWorks from './HowItWorks';
import ScrollAnimation from 'react-animate-on-scroll';

const Home = () => (
  <div>
    <Helmet>
        <title>Mama Mobile Massage | In-home Prenatal & Postnatal Massage | RMT</title>
        <meta name="description" content="Mama Mobile Massage delivers Registered Massage Therapists to your home for your prenatal, postnatal, or busy mama massage." />
    </Helmet>
    <ScrollToTop />
    {/* <FirstImage 
      img={imageOne}
      title='in-home massage for moms at every stage'
    /> */}
    <HeroCorona />
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
      <h2 className='title testimonial-title'>What Our Mama Tribe Says!</h2>
    </ScrollAnimation>
    <ScrollAnimation
      animatePreScroll
      animateIn="slideInUp"
      animateOnce
    >
      <Testimonial />
    </ScrollAnimation>
    {/* <ScrollAnimation
      animatePreScroll
      animateIn="slideInUp"
      animateOnce
    >
      <UpcomingEvents />
    </ScrollAnimation> */}
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