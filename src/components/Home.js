import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Zoom from 'react-reveal';
import tree from '../images/tree.jpg';
import Tour from './Tour';
import Videos from './Videos';
import PhotoTitle from './PhotoTitle';
import Photos from './Photos';
import About from './About';
import ContactForm from './Contact';

export class Home extends Component {
  render() {
    return (
      <>
        <div
          style={{ backgroundImage: `url(${tree})`, backgroundSize: 'cover' }}>
          <Zoom right>
            <img
              src='../img/logo.png'
              alt='logo'
              className='mt-5 mb-5 img-fluid'
            />
          </Zoom>
          <div className='position-relative'>
            <div className='d-grid gap-2 position-absolute bottom-0 end-0 pb-5 pe-5 mb-2'>
              <Link to='/productlist'>
                <Button type='button' className='btn-danger btn-lg'>
                  <strong className='fs-3'>Check Out The Merch Store !</strong>
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <Tour />
        <Videos />
        <PhotoTitle />
        <Photos />
        <About />
        <ContactForm />
      </>
    );
  }
}

export default Home;
