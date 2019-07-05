import React from 'react';
import Button from '../Button/ButtonAnimated';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import './subscribe.css';


const styles = {
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
  }
}

export default class SubscribeInit extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      email: '',
      city: '',
      open: false,
    }
  
  };

  componentDidMount = () => {
    this.interval = setInterval(this.handleClickOpen, 40000);
  }

  componentWillUnmount = () => {
    clearInterval(this.interval);
  }

  handleChange = (e) => {
    const name = e.target.name;

    this.setState({
      [name]: e.target.value
    });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
    this.props.changeFirstLoad();
  };

  handleSubmit = (e) => {
    e.preventDefault();
    
    fetch('/.netlify/functions/subscribe', {
      method: 'POST',
      body: JSON.stringify(this.state),
    }).then(response => {
      console.log(response);
      if (response.status === 200) {
        this.setState({
          email: '',
          city: '',
          open: false
        });
      } else {
        alert('Sorry, your subscription did not go through - please try again later or e-mail us at info@mamamobilemassage.com');
        this.setState({
          open: false
        });
      }
    });
  }

  render() {
    return (
      <div className={this.state.open ? 'display overlay' : ''}>
        <div id='subscribe-dialog' className={this.state.open ? 'display' : ''}>
          <div id='subscribe-dialog-header'>
            <Icon onClick={this.handleClose} style={styles.icon}>close</Icon>
            <h5>JOIN OUR MAILING LIST</h5>
          </div>
          <div id='subscribe-dialog-body'>
            <p>Get mama tips and self-love promotions delivered right to your inbox!</p>
            <form onSubmit={this.handleSubmit}>
              <div className='subscribe-form-input'>
                <TextField
                  style={styles.textField}
                  required
                  name='email'
                  onChange={this.handleChange}
                  value={this.state.email}
                  label='E-MAIL ADDRESS'
                  margin="normal"
                  type="email"
                  autoComplete="email"
                />
              </div>
              <div className='subscribe-form-input'>
                <TextField
                  style={styles.textField}
                  required
                  name='city'
                  onChange={this.handleChange}
                  value={this.state.city}
                  label='CITY'
                  margin="normal"
                />
              </div>
              <div className='subscribe-form-button'>
                <Button content='KEEP ME POSTED' icon='mail' center/>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}