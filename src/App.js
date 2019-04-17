import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store'
import Header from './containers/Header/index';
import Home from './containers/Home/index';
import About from './containers/About/index';
import Contact from './containers/Contact/index';
import GiftCard from './containers/GiftCard/index';
import Blog from './containers/Blog/index';
import Footer from './containers/Footer/MobileFooter';
import './App.css';
import Career from './containers/Career';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Header />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/blog" component={Blog} />
            <Route path="/gift-card" component={GiftCard} />
            <Route path="/careers" component={Career} />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
