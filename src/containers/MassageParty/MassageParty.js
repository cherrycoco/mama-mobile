import React from 'react';
import PartyCard from './PartyCard';
import './massageParty.css';
import PartyForm from './PartyForm';
import ScrollToTop from '../../components/ScrollTop';

const corporateImg = "https://res.cloudinary.com/dhze7gimq/image/upload/v1581488704/corporate-events.png";
const bridalImg = "https://res.cloudinary.com/dhze7gimq/image/upload/v1581488687/mama-group.png";
const showerImg = "https://res.cloudinary.com/dhze7gimq/image/upload/v1579727597/babyshower_zux9vs.jpg";

const MassageParty = () => {
  const handleFormViewClick = () => {
    let form = document.getElementById('party-form-wrapper');
    form.scrollIntoView({behavior: "smooth", block: "end"});
  };

  const handleRedirect = () => {
    window.open('https://www.betteratwork.co/contact');
  };

  return (
    <div>
      <ScrollToTop />
      <div 
        id='home-first-image' 
        style=
          {{backgroundImage: 
            `linear-gradient(
            rgba(255, 255, 255, 0.5), 
            rgba(255, 255, 255, 0.5)),
            url(https://res.cloudinary.com/dhze7gimq/image/upload/v1581488712/baby-shower-party.png)`
          }} 
        aria-label='a group of moms celebrating a baby shower'
      >
        <div id='home-first-image-content'>
          <h1>Elevate your party or event with our signature party massage packages</h1>
        </div>
      </div>
      <PartyCard 
        img={showerImg}
        title="Baby Showers/Special Events"
        bonus="Bonus: Mama can use their insurance benefits!"
        handleClick={handleFormViewClick}
        description="Skip the party games and enjoy some pampering with your guests instead! Our half-day or full-day bookings allow guests to select mini services from our customized massage menu to enjoy 5-15 minute massages at varying points throughout your shower!"
      />
      <PartyCard 
        img={bridalImg}
        handleClick={handleFormViewClick}
        title="Mama Groups/Play Dates"
        bonus="Bonus: Mama can use their insurance benefits!"
        description="Assemble the squad for an afternoon or evening of massages. Let us set up in a vacant room during your next play date allowing you to enjoy your massage sans baby while bonding with your girls!"
      />
      <PartyCard
        img={corporateImg}
        handleClick={handleRedirect}
        title="Corporate Events"
        bonus="Visit our sister site better@work to elevate your office!"
        description="In-office massage is a great way to improve physical and mental wellbeing at work. Arrange to have us set up in your office allowing employees to get a massage using their personal benefits without leaving the office OR  surprise them with a full/half day mini-massage event as a company perk! As little as $20/massage."
      />
      <PartyForm />
    </div>
  )
}

export default MassageParty;