import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
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
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/blog" component={Blog} />
              <Route exact path='/blog/:title' component={BlogPost} />
              <Route exact path="/gift-card" component={GiftCard} />
              <Route exact path="/careers" component={Career} />
              <Route path="/" component={Home} />
              <Footer />
            </div>
          </Router>
        </MuiPickersUtilsProvider>
      </Provider>
    );
  }
}

export default App;
