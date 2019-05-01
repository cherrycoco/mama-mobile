import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '../../components/Button/ButtonAnimated';

const styles = {
  root: {
    width: '100%',
  }
}

class ContactForm extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
      success: null,
    }
  };

  handleChange = (e) => {
    const name = e.target.name;

    this.setState({
      [name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    fetch('/.netlify/functions/contactForm', {
      method: 'POST',
      body: JSON.stringify(this.state),
    }).then(response => {
      if (response.status === 200) {
        this.setState({
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          message: '',
          success: true,
        });
      } else {
        this.setState({
          success: false
        });
      }
    });
  }

  renderMessage = () => {
    if (this.state.success === true) {
      return (
        <div id='contact-form-message'>
          <h5>Thanks for contacting us, we will be in touch shortly!</h5>
        </div>
      )
    } else if (this.state.success === false) {
      return (
        <div id='contact-form-message'>
          <h5>
            {`Sorry - there seems to be a problem on our end, please try e-mailing us at `}
            <a href='mailto:info@mamamobilemassage.com'><h5 style={{color: 'rgb(198, 139, 189)'}}>info@mamamobilemassage.com</h5></a>
          </h5>
        </div>
      )
    }
  }

  render () {
    return (
      <form id='contact-form' onSubmit={this.handleSubmit}>
        <div className='contact-form-input'>
          <TextField
            required
            name='firstName'
            value={this.state.firstName}
            onChange={this.handleChange}
            style={styles.root}
            id="firstName"
            label="First Name"
            placeholder="First Name"
            variant="outlined"
          />
        </div>
        <div className='contact-form-input'>
          <TextField
            required
            name='lastName'
            value={this.state.lastName}
            onChange={this.handleChange}
            style={styles.root}
            id="lastName"
            label="Last Name"
            placeholder="Last Name"
            variant="outlined"
          />
        </div>
        <div className='contact-form-input'>
          <TextField
            required
            name='email'
            value={this.state.email}
            onChange={this.handleChange}
            style={styles.root}
            id="email"
            type="email"
            autoComplete="email"
            label="E-mail"
            placeholder="E-mail"
            variant="outlined"
          />
        </div>
        <div className='contact-form-input'>
          <TextField
            required
            name='subject'
            value={this.state.subject}
            onChange={this.handleChange}
            style={styles.root}
            id="subject"
            label="Subject"
            placeholder="Subject"
            variant="outlined"
          />
        </div>
        <div className='contact-form-input'>
          <TextField
            required
            name='message'
            style={styles.root}
            value={this.state.message}
            onChange={this.handleChange}
            id="message"
            label="Message"
            placeholder="Message"
            multiline
            rows="10"
            variant="outlined"
          />
        </div>
        <div id='contact-form-button'>
          <Button 
            content='SEND!'
            icon='mail'
            center
          />
        </div>
        <div className='clearFloat' />
        {this.renderMessage()}
      </form>
    )
  }
}

export default ContactForm; 