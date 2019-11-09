import React from 'react';
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import './FAQ.css';

class FAQ extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a1: false,
      a2: false,
      a3: false,
      a5: false,
      a6: false,
      a7: false,
      a8: false,
      a9: false,
      a10: false,
      a11: false,
      a12: false,
      a13: false,
      a14: false,
      a15: false,
      a16: false,
    }
  }

  handleClick = (id) => {
    this.setState(prevState => ({
      [id]: !prevState[id]
    }));
  }

  renderA1 = () => (
    <div className='FAQ-card-answers'> 
      <p>Nah, we come to you mama! We want to make this experience as seamless as possible- we took out all steps: Driving, finding childcare, putting on pants- you know.</p>
    </div>
  )

  renderA2 = () => (
    <div className='FAQ-card-answers'> 
      <p>Yes! We are a team of Registered Massage Therapists (RMT’s for short) This means that we are part of most services covered by your insurance benefit plan in Ontario.</p>
      <p>Not sure if you are covered? Ask your provider. Your policy may require a doctors note to claim services, they will fill you in!</p>
    </div>
  )

  renderA3 = () => (
    <div className='FAQ-card-answers'> 
      <p>We have a strict 24 hour cancellation policy. Although we want to make life as easy as possible for our mamas our RMT’s also only are able to see limited mamas per day because of the extra time we schedule! We typically have a long waiting list and can fill your space but need a little notice, you know? </p>
      <p>You can cancel and reschedule online. If you are close to labour we may be a little bit more understanding, just let us know on booking and we can reschedule till baby is in your arms if need be.</p>
    </div>
  )

  renderA5 = () => (
    <div className='FAQ-card-answers'> 
      <p>
        Mama, believe us when we say <b>this is totally normal</b>! Don’t worry about leaking. We will always be sure to provide a position that supports tender breasts for your comfort. We also bring along all supplies to clean up our tables post massage so don’t worry about any leaks, just relax!
      </p>
    </div>
  )

  renderA6 = () => (
    <div className='FAQ-card-answers'> 
      <p>
        No, we do not offer <b>direct billing</b> however, we are covered if you have massage coverage in your insurance benefit plan. We offer online payment through any major credit card or American Express! (You can use your corporate card if you have one) You will be emailed an insurance receipt within 24 hours following your massage to submit for reimbursement from your provider. 
      </p>
    </div>
  )

  renderA7 = () => (
    <div className='FAQ-card-answers'> 
      <p>
        We have online booking so that our busy mamas can book anytime, anywhere! Baby in one arm, cellphone in the other you know the drill. You will simply go to your main page and click book now… or just 
        <a href='https://mamamobilemassage.janeapp.com'><b> click me </b></a>
        if you don't want to turn back around.  You will see a list of locations in our online system, find the one that best describes your area and book using that schedule! If you can’t find a time slot that works for you or the area in which you live please shoot us an email and we will help you out mama! 
        <a href='mailto:info@mamamobilemassage.com'><b> info@mamamobilemassage.com</b></a>
      </p>
    </div>
  )

  renderA8 = () => (
    <div className='FAQ-card-answers'> 
      <p>
        When you book online a window will pop up for you to pay for your massage- simply add in your favourite card and get ready for your massage mama! You will be able to pay via any major method of payment. Within 24 hours following your massage you will be sent an insurance receipt.
      </p>
    </div>
  )

  renderA9 = () => (
    <div className='FAQ-card-answers'> 
      <p>
        Heck yes mama! Within 24 hours following your massage you will be emailed an insurance receipt. Please note that your file is updated with the correct name that you wish to appear on it.  
      </p>
    </div>
  )

  renderA10 = () => (
    <div className='FAQ-card-answers'> 
      <p>
        Did you know… we created our services around the idea of allowing mamas who are alone during the day with baby to be able to receive Massage Therapy too? We actually schedule an extra 30 minutes with EVERY postnatal mama appointment. This way you don’t have to worry about the expected, unexpected.. you know diaper changes, last minute feedings- the works. You can rest easy knowing that we are here to make sure you will receive a massage for the amount of time you booked, no matter what!  
      </p>
    </div>
  )

  renderA11 = () => (
    <div className='FAQ-card-answers'> 
      <p>
        Although we focus on mamas we do in fact massage papas too! We actually created a special option so that we can let them experience some TLC too. On our schedule this option is called “mama/papa” <b>We do not offer couple massages simultaneously</b>. Like everything we do, our mama/papa massages are a little bit unconventional. We provide each of you with either a 60 or 90 minute individual massage back to back. The idea behind this is that you will be able to tag team the kids to bed!.   
      </p>
    </div>
  )

  renderA12 = () => (
    <div className='FAQ-card-answers'> 
      <p>
        We are a growing fam mama! We hope to be in all cities throughout Canada in due time. If you really want to see us in your city please let us know and we will work on speeding up that process!
        <a href='mailto:info@mamamobilemassage.com'><b> info@mamamobilemassage.com</b></a>
      </p>
    </div>
  )

  renderA13 = () => (
    <div className='FAQ-card-answers'> 
      <p>
        We do! We have worked with mama’s who meet up on a weekly basis. We typically provide 30 minute mini massages with one mama at a time while other mamas visit and have a lil’ playdate with the babes. Please email us for more info and pricing 
        <a href='mailto:info@mamamobilemassage.com'><b> info@mamamobilemassage.com. </b></a>
        If you have over 4 mamas we will send multiple RMT’s.   
      </p>
    </div>
  )

  renderA14 = () => (
    <div className='FAQ-card-answers'> 
      <p>
        We are a common gift (We are so flattered) We love being part of your special moments and to see our message of self care for the busy mama spread throughout your circles.
      </p>
      <p>
        To purchase you will simply <Link to='/gift-card'><b> click here</b></Link>
      </p>
      <p>
        Once you click the little link above it will bring you to a page that allows you to select the appropriate style/time length of gift certificate. You will actually be able to pay for this online and select the date you wish it to be sent on! Your fave mama will be able to redeem whenever she is desperate for that touch of TLC!
      </p>
    </div>
  )

  renderA15 = () => (
    <div className='FAQ-card-answers'> 
      <p>
        Ready to talk dollas’?! Check out our main page- you will see our “Pricing”. When you click on our online schedule you will also see a full list of services with prices.
      </p>
      <p>
        <Link to='/prices'>Click here to book online/see prices</Link>
      </p>
    </div>
  )

  renderA16 = () => (
    <div className='FAQ-card-answers'> 
      <p>
        We are currently on the hunt for amazing RMT’s passionate about prenatal and postnatal Massage Therapy. We are growing across Canada, we may even be looking in your very neighbourhood!
      </p>
      <p>
        <Link to='/careers'>Click here to see what is like working with us!</Link>
      </p>
    </div>
  )

  render () {
    return (
      <div id='FAQ'>
        <ScrollAnimation
          animatePreScroll
          animateIn="slideInUp"
          animateOnce
        >
          <h2 className='title'>Frequently Asked Questions</h2>
        </ScrollAnimation>
        <ScrollAnimation
          animatePreScroll
          animateIn="slideInUp"
          animateOnce
        >
          <div className='FAQ-card'>
            <div className='FAQ-card-questions' onClick={() => this.handleClick('a1')}>
              {this.state.a1 ? <Icon name='angle down' size='large'/> : <Icon name='angle right' size='large'/> }
              <h4>Do you have a physical location?</h4>
            </div>
            {this.state.a1 && this.renderA1()}
          </div>

          <div className='FAQ-card'>
            <div className='FAQ-card-questions' onClick={() => this.handleClick('a2')}>
              {this.state.a2 ? <Icon name='angle down' size='large'/> : <Icon name='angle right' size='large'/> }
              <h4>Is this covered by insurance benefits?</h4>
            </div>
            {this.state.a2 && this.renderA2()}
          </div>

          <div className='FAQ-card'>
            <div className='FAQ-card-questions' onClick={() => this.handleClick('a3')}>
              {this.state.a3 ? <Icon name='angle down' size='large'/> : <Icon name='angle right' size='large'/> }
              <h4>What is your cancellation policy?</h4>
            </div>
            {this.state.a3 && this.renderA3()}
          </div>

          <div className='FAQ-card'>
            <div className='FAQ-card-questions' onClick={() => this.handleClick('a5')}>
              {this.state.a5 ? <Icon name='angle down' size='large'/> : <Icon name='angle right' size='large'/> }
              <h4>My boobs are leaky</h4>
            </div>
            {this.state.a5 && this.renderA5()}
          </div>

          <div className='FAQ-card'>
            <div className='FAQ-card-questions' onClick={() => this.handleClick('a6')}>
              {this.state.a6 ? <Icon name='angle down' size='large'/> : <Icon name='angle right' size='large'/> }
              <h4>Do you offer direct billing?</h4>
            </div>
            {this.state.a6 && this.renderA6()}
          </div>

          <div className='FAQ-card'>
            <div className='FAQ-card-questions' onClick={() => this.handleClick('a7')}>
              {this.state.a7 ? <Icon name='angle down' size='large'/> : <Icon name='angle right' size='large'/> }
              <h4>How do I book?</h4>
            </div>
            {this.state.a7 && this.renderA7()}
          </div>

          <div className='FAQ-card'>
            <div className='FAQ-card-questions' onClick={() => this.handleClick('a8')}>
              {this.state.a8 ? <Icon name='angle down' size='large'/> : <Icon name='angle right' size='large'/> }
              <h4>How do I pay?</h4>
            </div>
            {this.state.a8 && this.renderA8()}
          </div>

          <div className='FAQ-card'>
            <div className='FAQ-card-questions' onClick={() => this.handleClick('a9')}>
              {this.state.a9 ? <Icon name='angle down' size='large'/> : <Icon name='angle right' size='large'/> }
              <h4>Will I receive an insurance receipt?</h4>
            </div>
            {this.state.a9 && this.renderA9()}
          </div>

          <div className='FAQ-card'>
            <div className='FAQ-card-questions' onClick={() => this.handleClick('a10')}>
              {this.state.a10 ? <Icon name='angle down' size='large'/> : <Icon name='angle right' size='large'/> }
              <h4>What do I do with baby during my massage?</h4>
            </div>
            {this.state.a10 && this.renderA10()}
          </div>

          <div className='FAQ-card'>
            <div className='FAQ-card-questions' onClick={() => this.handleClick('a11')}>
              {this.state.a11 ? <Icon name='angle down' size='large'/> : <Icon name='angle right' size='large'/> }
              <h4>Do you massage papas too?</h4>
            </div>
            {this.state.a11 && this.renderA11()}
          </div>

          <div className='FAQ-card'>
            <div className='FAQ-card-questions' onClick={() => this.handleClick('a12')}>
              {this.state.a12 ? <Icon name='angle down' size='large'/> : <Icon name='angle right' size='large'/> }
              <h4>When will you come to my area?</h4>
            </div>
            {this.state.a12 && this.renderA12()}
          </div>

          <div className='FAQ-card'>
            <div className='FAQ-card-questions' onClick={() => this.handleClick('a13')}>
              {this.state.a13 ? <Icon name='angle down' size='large'/> : <Icon name='angle right' size='large'/> }
              <h4>Do you offer group massages for mama friends?</h4>
            </div>
            {this.state.a13 && this.renderA13()}
          </div>

          <div className='FAQ-card'>
            <div className='FAQ-card-questions' onClick={() => this.handleClick('a14')}>
              {this.state.a14 ? <Icon name='angle down' size='large'/> : <Icon name='angle right' size='large'/> }
              <h4>Do you have gift certificates?</h4>
            </div>
            {this.state.a14 && this.renderA14()}
          </div>

          <div className='FAQ-card'>
            <div className='FAQ-card-questions' onClick={() => this.handleClick('a15')}>
              {this.state.a15 ? <Icon name='angle down' size='large'/> : <Icon name='angle right' size='large'/> }
              <h4>Where are your prices?</h4>
            </div>
            {this.state.a15 && this.renderA15()}
          </div>
        </ScrollAnimation>
      </div>
    )
  }
};

export default FAQ;