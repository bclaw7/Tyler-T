import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Tour from './components/Tour';
import Photos from './components/Photos';
import About from './components/About';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Modal from './components/Modal';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/productlist' component={ProductList} />
          <Route path='/details' component={Details} />
          <Route path='/cart' component={Cart} />
          <Route component={Default} />
        </Switch>
        <Tour />
        <Photos />
        <About />
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;
