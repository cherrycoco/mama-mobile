import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import MaterialButton from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import { createMuiTheme } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/mama-mobile-logo.png';
import ButtonBasic from '../../components/Button/ButtonBasic';
import { Button, Icon } from 'semantic-ui-react';

const styles = {
  divider: {
    width: '100%',
    margin: '0 auto',
  },
  bookButton: {
    width: '100%',
    height: '40px',
    marginTop: '15px',
    backgroundColor: '#CC98C5',
    color: 'white',
    borderRadius: 0,
  },
  icon: {
    color: '#CC98C5',
  }
}

class MobileNav extends React.Component {
  state = {
    right: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div id='nav-side-list'>
        <div id='nav-side-list-logo'>
          <NavLink to='/'><img width="200" src={logo} /></NavLink>
        </div>
        <Divider style={styles.divider} />
        <Button style={styles.bookButton}>
          Book a Massage
        </Button>
        <List>
          {['about', 'gift-card', 'blog', 'contact', 'careers'].map((text, index) => {
            let endPoint = text.split('-').join(' ');
            return (
              <NavLink key={text} to={`/${text}`}>
                <ListItem button>{endPoint}</ListItem>
              </NavLink>
            )
          })}
        </List>
        <Divider style={styles.divider}/>
        <div id='mobile-nav-social'>
          <a href='https://www.instagram.com/mamamobilemassage/' target='_blank'>
            <Icon name='instagram' size='big' style={{color: '#D7AED1'}} />
          </a>
          <a href='https://www.facebook.com/mamamobilemassagetherapy/' target='_blank'>
            <Icon name='facebook' size='big' style={{color: '#D7AED1'}} />
          </a>
        </div>
      </div>
    );

    return (
      <div id='mobile-nav'>
        <MaterialButton onClick={this.toggleDrawer('right', true)}>
          <i style={styles.icon} className="material-icons">menu</i>
        </MaterialButton>
        <Drawer anchor="right" open={this.state.right} onClose={this.toggleDrawer('right', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('right', false)}
            onKeyDown={this.toggleDrawer('right', false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

export default MobileNav;