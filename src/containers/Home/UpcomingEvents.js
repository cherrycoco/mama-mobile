import React from 'react';

const UpcomingEvents = () => (
  <div id='upcoming-events'>
    <h2>UPCOMING EVENTS</h2>
    {/* <img src='https://res.cloudinary.com/dhze7gimq/image/upload/v1558911825/infantmassage_course.png' alt='infant massage 101'/> */}
    <div id='upcoming-events-content'>
      <h4>Infant Massage 101!</h4>
      <p>Hey mama! Do you have a baby under 1 year? Have you wanted to meet other mamas in your neighbourhood WHILE learning techniques to perform massage on your little one? This course is for you!</p>
      <p>Here is the 411: You will meet with 8 other mamas/babies in an intimate setting with an expert RMT. Open discussions on why infant massage is important and all of the do’s/don’ts. You will leave class with 7 new friendships and the confidence to perform 3 massage routines safely on baby:</p>
      <ol>
        <li>Relaxation/sleep routine</li>
        <li>Surviving colds routine</li>
        <li>Constipation/colic routine</li>
      </ol>
      <h5>New courses coming soon!</h5> 
      <h5>
        <a className='underline' href='https://docs.google.com/forms/d/e/1FAIpQLSfshj8ARHlAq1Or4cxEdJGOSAU1zWaBxl7vtk7Op8w0bX7eJg/viewform' target='_blank'><b>CLICK HERE </b></a> 
        to be added to the waitlist for upcoming courses in your location!
      </h5>
    </div>
  </div>
);

export default UpcomingEvents;