import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import MaterialButton from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import { NavLink } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

const styles = {
  divider: {
    width: '100%',
    margin: '0 auto',
  },
  icon: {
    color: '#F087A0',
  },
  phone: {
    margin: '30px auto',
  },
  phoneNumber: {
    fontWeight: 500,
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
          <NavLink to='/'>
            mama mobile
          </NavLink>
        </div>
        <Divider style={styles.divider} />
        <List>
          {['about', 'gift-card', 'group-booking', 'blog', 'contact', 'careers'].map((text, index) => {
            let endPoint = text.split('-').join(' ');
            return (
              <NavLink key={text} to={`/${text}`}>
                <ListItem button>{endPoint}</ListItem>
              </NavLink>
            )
          })}
        </List>
        <Divider style={styles.divider}/>
        <div style={styles.phone}>
          <Icon name='phone' style={{color: 'rgb(168, 168, 168)', paddingRight: '20px'}} />
          <a style={styles.phoneNumber} href='tel:866-266-3779'>1 (866) 266 - 3779</a>
        </div>
        <Divider style={styles.divider}/>
        {/* <form type='get' action='https://www.booking.mamamobile.com'>
          <button className='subscribe-button button-outline'>BOOK</button>
        </form> */}
        {/* <div id='mobile-nav-social'>
          <a href='https://www.instagram.com/mamamobilemassage/' target='_blank'>
            <Icon name='instagram' size='big' style={{color: '#D7AED1'}} />
          </a>
          <a href='https://www.facebook.com/mamamobilemassagetherapy/' target='_blank'>
            <Icon name='facebook' size='big' style={{color: '#D7AED1'}} />
          </a>
        </div> */}
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