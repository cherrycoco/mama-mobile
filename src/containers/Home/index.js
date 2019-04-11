import React from 'react';
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
    <div className='divider' />
    <Prices />
    <FAQ />
    <h1 className='title'>What Our Mama Tribe Says!</h1>
    <Testimonial />
    <UpcomingEvents />
    <GiftCertificate />
    <VisitBlog />
  </div>
)

export default Home;