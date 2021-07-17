import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Tour from './components/Tour';
import PhotoTitle from './components/PhotoTitle';
import Photos from './components/Photos';
import About from './components/About';
import Videos from './components/Videos';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Contact from './components/Contact';
import Default from './components/Default';
import Modal from './components/Modal';
import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/productlist' component={ProductList} />
          <Route path='/details' component={Details} />
          <Route path='/cart' component={Cart} />
          <Route path='/tlogin' component={Login} />
          <Route component={Default} />
        </Switch>
        <Tour />
        <Videos />
        <PhotoTitle />
        <Photos />
        <About />
        <Contact />
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;
