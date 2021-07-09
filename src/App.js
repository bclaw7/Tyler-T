import React, { Component, useState } from 'react';
import { Switch, Route } from 'react-router';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Tour from './components/Tour';
import Photos from './components/Photos';
import About from './components/About';
import Videos from './components/Videos';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Contact from './components/Contact';
import Default from './components/Default';
import Modal from './components/Modal';

class App extends Component {
  render() {
    var urlArray = window.location.href.split('/');
    this.state = { url: urlArray[urlArray.length - 1] };
    return (
      <React.Fragment>
        <Navbar url={this.state.url} />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/productlist' component={ProductList} />
          <Route path='/details' component={Details} />
          <Route path='/cart' component={Cart} />
          <Route component={Default} />
        </Switch>
        <Tour />
        <Videos />
        <Photos />
        <About />
        <Contact />
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;
