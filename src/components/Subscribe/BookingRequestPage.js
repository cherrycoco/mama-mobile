import React from 'react';
import Button from '../Button/ButtonAnimated';
// import DatePicker from '../DatePicker/index';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import './subscribe.css';
import Autocomplete from 'react-google-autocomplete';
import CheckBox from './CheckBox';

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
      subject: '',
      message: '',
      unit: '',
      mon: {
        morning: false,
        afternoon: false,
        night: false,
      },
      tues: {
        morning: false,
        afternoon: false,
        night: false,
      },
      wed: {
        morning: false,
        afternoon: false,
        night: false,
      },
      thurs: {
        morning: false,
        afternoon: false,
        night: false,
      },
      fri: {
        morning: false,
        afternoon: false,
        night: false,
      },
      sat: {
        morning: false,
        afternoon: false,
        night: false,
      },
      sun: {
        morning: false,
        afternoon: false,
        night: false,
      },
    }
  };

  handleCheckBox = (e) => {
    const name = e.target.value;
    let day = name.split('.')[0];
    let time = name.split('.')[1];
    let state = {...this.state[day]};
    state[time] = !state[time];

    this.setState({
      [day]: state,
    });
  };

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
          subject: '',
          unit: '',
          message: '',
          mon: {
            morning: false,
            afternoon: false,
            night: false,
          },
          tues: {
            morning: false,
            afternoon: false,
            night: false,
          },
          wed: {
            morning: false,
            afternoon: false,
            night: false,
          },
          thurs: {
            morning: false,
            afternoon: false,
            night: false,
          },
          fri: {
            morning: false,
            afternoon: false,
            night: false,
          },
          sat: {
            morning: false,
            afternoon: false,
            night: false,
          },
          sun: {
            morning: false,
            afternoon: false,
            night: false,
          },
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
          <p>Please submit a booking request here:</p>
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
                style={styles.root}
                id="email"
                type="email"
                autoComplete="email"
                label="E-mail"
                placeholder="E-mail"
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
            <div className='check-box-wrapper'>
              <p>Please select your availability here: </p>
              <div className='check-box-line-heading'>
                <h5> </h5>
                <h4>Mon</h4>   
                <h4>Tues</h4> 
                <h4>Wed</h4> 
                <h4>Thurs</h4> 
                <h4>Fri</h4> 
                <h4>Sat</h4> 
                <h4>Sun</h4>                
              </div>
              <div className='check-box-line-one'>
                <h5>Morning: </h5>
                <CheckBox value='mon.morning' checked={this.state.mon.morning} onCheck={this.handleCheckBox} />
                <CheckBox value='tues.morning' checked={this.state.tues.morning} onCheck={this.handleCheckBox} />
                <CheckBox value='wed.morning' checked={this.state.wed.morning} onCheck={this.handleCheckBox} />
                <CheckBox value='thurs.morning' checked={this.state.thurs.morning} onCheck={this.handleCheckBox} />
                <CheckBox value='fri.morning' checked={this.state.fri.morning} onCheck={this.handleCheckBox} />
                <CheckBox value='sat.morning' checked={this.state.sat.morning} onCheck={this.handleCheckBox} />
                <CheckBox value='sun.morning' checked={this.state.sun.morning} onCheck={this.handleCheckBox} />
              </div>
              <div className='check-box-line-two'>
                <h5>Afternoon: </h5>
                <CheckBox value='mon.afternoon' checked={this.state.mon.afternoon} onCheck={this.handleCheckBox} />
                <CheckBox value='tues.afternoon' checked={this.state.tues.afternoon} onCheck={this.handleCheckBox} />
                <CheckBox value='wed.afternoon' checked={this.state.wed.afternoon} onCheck={this.handleCheckBox} />
                <CheckBox value='thurs.afternoon' checked={this.state.thurs.afternoon} onCheck={this.handleCheckBox} />
                <CheckBox value='fri.afternoon' checked={this.state.fri.afternoon} onCheck={this.handleCheckBox} />
                <CheckBox value='sat.afternoon' checked={this.state.sat.afternoon} onCheck={this.handleCheckBox} />
                <CheckBox value='sun.afternoon' checked={this.state.sun.afternoon} onCheck={this.handleCheckBox} />
              </div>
              <div className='check-box-line-three'>
                <h5>Night: </h5>
                <CheckBox value='mon.night' checked={this.state.mon.night} onCheck={this.handleCheckBox} />
                <CheckBox value='tues.night' checked={this.state.tues.night} onCheck={this.handleCheckBox} />
                <CheckBox value='wed.night' checked={this.state.wed.night} onCheck={this.handleCheckBox} />
                <CheckBox value='thurs.night' checked={this.state.thurs.night} onCheck={this.handleCheckBox} />
                <CheckBox value='fri.night' checked={this.state.fri.night} onCheck={this.handleCheckBox} />
                <CheckBox value='sat.night' checked={this.state.sat.night} onCheck={this.handleCheckBox} />
                <CheckBox value='sun.night' checked={this.state.sun.night} onCheck={this.handleCheckBox} />
              </div>
            </div>
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
            <div id='subscribe-form-button'>
              <Button 
                content='SEND!'
                icon='mail'
                center
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

