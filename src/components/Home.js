import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Zoom from 'react-reveal';
import tree from '../tree.jpg';

export class Home extends Component {
  render() {
    return (
      <div style={{ backgroundImage: `url(${tree})`, backgroundSize: 'cover' }}>
        <Zoom right>
          <img
            src='../img/logo.png'
            alt='logo'
            className='mt-5 mb-5 img-fluid'
          />
        </Zoom>
        <div class='position-relative'>
          <div className='d-grid gap-2 position-absolute bottom-0 end-0 pb-5 pe-5 mb-2'>
            <Link to='/productlist'>
              <button type='button' className='btn btn-danger btn-lg'>
                <strong className='fs-3'>Check Out The Merch Store !</strong>
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
