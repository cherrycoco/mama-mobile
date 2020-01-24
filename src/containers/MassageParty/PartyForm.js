import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const styles = {
  firstHalf: {
    width: '45%',
    marginRight: '10%',
  },
  half: {
    width: '45%',
  },
  full: {
    width: '100%',
  }
};

const PartyForm = () => {
  const [services, setService] = useState({
    shower: false,
    group: false,
    corporate: false,
  });
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');

  const handleServiceChange = name => event => {
    setService({ ...services, [name]: event.target.checked });
  };

  const handleChange = setName => e => {
    setName(e.target.value);
  };

  const { shower, group, corporate } = services;

  const handleSubmit = e => {
    e.preventDefault();
    fetch('/.netlify/functions/partyForm', {
      method: 'POST',
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        tel,
        address,
        message,
        shower,
        group,
        corporate,
      }),
    }).then(response => {
      if (response.status === 200) {
        alert("We've received your request - our event squad will be in touch shortly!");
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      } else {
        alert('Apologies, there seem to be an issue on our end - please email us at hello@mamamobile.com!');
      }
    });
  }

  return (
    <div id="party-form-wrapper">
      <h2>Get in touch with our event squad 🙋‍♀️</h2>
      <form id="party-form">
        <div className="party-form-content">
          <TextField 
            style={styles.firstHalf}
            required 
            label="First Name" 
            onChange={handleChange(setFirstName)}
            value={firstName}
          />
          <TextField
            style={styles.half}
            required
            label="Last Name" 
            onChange={handleChange(setLastName)}
            value={lastName}
          />
        </div>
        <div className="party-form-content">
          <TextField
            style={styles.firstHalf}
            required
            label="Email"
            onChange={handleChange(setEmail)}
            value={email}
          />
          <TextField
            style={styles.half}
            required
            label="Phone Number"
            onChange={handleChange(setTel)}
            value={tel}
          />
        </div>
        <div className="party-form-content">
          <TextField 
            style={styles.full}
            required 
            label="Event Address" 
            onChange={handleChange(setAddress)}
            value={address}
          />
        </div>
        <div className="party-form-content">
        <FormLabel style={styles.full} component="legend">Check our services that interest you:</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox checked={shower} onChange={handleServiceChange('shower')} value="Baby Showers/Special Events" />}
              label="Baby Showers/Special Events"
            />
            <FormControlLabel
              control={<Checkbox checked={group} onChange={handleServiceChange('group')} value="Mama Groups/Play Dates" />}
              label="Mama Groups/Play Dates"
            />
            <FormControlLabel
              control={
                <Checkbox checked={corporate} onChange={handleServiceChange('corporate')} value="Corporate Events" />
              }
              label="Corporate Events"
            />
          </FormGroup>
        </div>
        <div className="party-form-content">
          <TextField
            style={styles.full}
            label="Message"
            multiline
            rows="4"
            variant="outlined"
            onChange={handleChange(setMessage)}
            value={message}
          />
        </div>
        <button onClick={(e) => handleSubmit(e)} className="button-outline">submit request!</button>
      </form>
    </div>
  )
}

export default PartyForm;