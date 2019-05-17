import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import MomentUtils from '@date-io/moment';
import store from './store'
import Header from './containers/Header/index';
import Home from './containers/Home/index';
import About from './containers/About/index';
import Contact from './containers/Contact/index';
import GiftCard from './containers/GiftCard/index';
import Blog from './containers/Blog/index';
import BlogPost from './components/BlogPost/index';
import BookingRequestPage from './components/Subscribe/BookingRequestPage';
import Footer from './containers/Footer/MobileFooter';
import './App.css';
import Career from './containers/Career';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <Router>
            <div>
              <Header />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route exact path="/blog" component={Blog} />
                <Route path='/blog/:title' component={BlogPost} />
                <Route path="/gift-card" component={GiftCard} />
                <Route path="/careers" component={Career} />
                <Route path="/booking-request" component={BookingRequestPage} />
                <Route component={Home} />
              </Switch>
              <Footer />
            </div>
          </Router>
        </MuiPickersUtilsProvider>
      </Provider>
    );
  }
}

export default App;
