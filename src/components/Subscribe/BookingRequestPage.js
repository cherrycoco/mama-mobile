import React from 'react';
import TextField from '@material-ui/core/TextField';
import './subscribe.css';
import Autocomplete from 'react-google-autocomplete';
import PhoneNumberMask from './PhoneNumberMask';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

const styles = {
  root: {
    width: '100%',
  },
  fname: {
    width: '45%',
    marginRight: '10%',
  },
  lname: {
    width: '45%',
  },
  icon: {
    height: '50px',
    width: '50px',
    padding: '12.5px',
    position: 'absolute',
    top: 0,
    left: 0,
    fontSize: '25px',
    color: 'rgba(0,0,0,.35)',
    cursor: 'pointer',
  },
  textField: {
    width: '100%',
  },
  autoComplete: {
    border: 'none',
    borderBottom: '1px solid gray',
    width: '70%',
    paddingTop: '7px',
    paddingBottom: '7px',
    marginTop: '14px',
    marginRight: '10%',
  },
  unit: {
    width: '20%',
  }
}

export default class BookingRequestPage extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      address: '',
      firstName: '',
      lastName: '',
      email: '',
      message: '',
      tel: '',
      unit: '',
      option1: '',
      option2: '',
      option3: '',
      massage: '',
    }
  };

  componentDidMount = () => {
    this.setState({
      option1: this.generateSampleDate()
    });
  }

  generateSampleDate = () => {
    const monthMap = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    const today = new Date();
    let month = monthMap[today.getMonth()]; 
    let day = today.getDate();
    if (day < 10) day = `0${day}`;
    const dateString = `${today.getFullYear()}-${month}-${day}T19:00`;
    console.log(dateString);
    return dateString;
  } 

  handleChange = (e) => {
    const name = e.target.name;

    this.setState({
      [name]: e.target.value
    });
  };

  handleAddressSelect = (address) => {
    this.setState({
      'address': address.formatted_address
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    
    fetch('/.netlify/functions/bookingForm', {
      method: 'POST',
      body: JSON.stringify(this.state),
    }).then(response => {
      if (response.status === 200) {
        this.setState({
          address: '',
          firstName: '',
          lastName: '',
          email: '',
          unit: '',
          message: '',
          tel: '',
          option1: '',
          option2: '',
          option3: '',
          massage: '',
        });
        alert('Hey Mama - we are working our best to get you a booking!');
      } else {
        alert('Sorry, your booking request did not go through - please try again later or e-mail us at info@mamamobilemassage.com');
      }
    });
  }

  render() {
    return (
      <div id='booking-request-page'>
        <div id='booking-form-header'>
          <h5>REQUEST A BOOKING</h5>
        </div>
        <div id='booking-form-body'>
          <form onSubmit={this.handleSubmit}>
            <div className='contact-form-input'>
              <TextField
                required
                name='firstName'
                value={this.state.firstName}
                onChange={this.handleChange}
                style={styles.fname}
                id="firstName"
                label="First Name"
                placeholder="First Name"
                autoComplete="given-name"
              />
              <TextField
                required
                name='lastName'
                value={this.state.lastName}
                onChange={this.handleChange}
                style={styles.lname}
                id="lastName"
                label="Last Name"
                placeholder="Last Name"
                autoComplete="family-name"
              />
            </div>
            <div className='contact-form-input'>
              <TextField
                required
                name='email'
                value={this.state.email}
                onChange={this.handleChange}
                style={styles.fname}
                id="email"
                type="email"
                autoComplete="email"
                label="E-mail"
                placeholder="E-mail"
              />
              <TextField
                required
                name='tel'
                value={this.state.tel}
                onChange={this.handleChange}
                style={styles.lname}
                id="tel"
                type="tel"
                autoComplete="tel"
                label="Phone Number"
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  inputComponent: PhoneNumberMask,
                }}
              />
            </div>
            <div className='contact-form-input'>
              <Autocomplete
                style={styles.autoComplete}
                onPlaceSelected={(address) => {
                  this.handleAddressSelect(address);
                }}
                onChange={this.handleChange}
                placeholder="Address"
                required
                name='address'
                types={['address']}
                componentRestrictions={{country: "ca"}}
              />
              <TextField
                name='unit'
                value={this.state.unit}
                onChange={this.handleChange}
                style={styles.unit}
                id="unit"
                label="Unit #"
                placeholder="Unit #"
              />
            </div>
            <div className='massage-select'>
              <InputLabel>Select your massage:</InputLabel>
              <Select
                value={this.state.massage}
                onChange={(e) => this.handleChange(e)}
                inputProps={{
                  name: 'massage',
                }}
              >
                <MenuItem value={'Prenatal Massage - 60 Minutes'}>Prenatal Massage - 60 Minutes</MenuItem>
                <MenuItem value={'Prenatal Massage - 90 Minutes'}>Prenatal Massage - 90 Minutes</MenuItem>
                <MenuItem value={'Postnatal Massage - 60 Minutes'}>Postnatal Massage - 60 Minutes</MenuItem>
                <MenuItem value={'Postnatal Massage - 90 Minutes'}>Postnatal Massage - 90 Minutes</MenuItem>
                <MenuItem value={'Busy Mama Massage- 60 Minutes'}>Busy Mama Massage- 60 Minutes</MenuItem>
                <MenuItem value={'Busy Mama Massage- 90 Minutes'}>Busy Mama Massage- 90 Minutes</MenuItem>
                <MenuItem value={'Mama & Papa Massage - 60 Minutes'}>Mama & Papa Massage - 60 Minutes</MenuItem>
                <MenuItem value={'Mama & Papa Massage - 90 Minutes'}>Mama & Papa Massage - 90 Minutes</MenuItem>
              </Select>
            </div>
            <InputLabel>Select your top three appointment dates:</InputLabel>
            <TextField
              required
              className='date-selector'
              label='Option 1 - top pick 🎉'
              type="datetime-local"
              value={this.state.option1}
              name='option1'
              onChange={this.handleChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              required
              className='date-selector'
              label='Option 2 - this is alright too 🙌'
              type="datetime-local"
              value={this.state.option2}
              name='option2'
              onChange={this.handleChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              className='date-selector'
              label='Option 3 - I guess this will do 💕'
              type="datetime-local"
              value={this.state.option3}
              name='option3'
              onChange={this.handleChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <div className='contact-form-input'>
              <TextField
                name='message'
                style={styles.root}
                value={this.state.message}
                onChange={this.handleChange}
                id="message"
                label="Additional notes..."
                placeholder="Additional notes..."
                multiline
                rows="3"
                variant="outlined"
              />
            </div>
            <button className='subscribe-button button-outline'>REQUEST BOOKING</button>
          </form>
        </div>
      </div>
    );
  }
}

