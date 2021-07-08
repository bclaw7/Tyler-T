import React, { Component } from 'react';
import Zoom from 'react-reveal';
import tree from '../tree.jpg';

export class Home extends Component {
  render() {
    return (
      <div style={{ backgroundImage: `url(${tree})`, backgroundSize: 'cover' }}>
        <Zoom bottom>
          <img
            src='../img/logo.png'
            alt='logo'
            className='mt-5 mb-5 img-fluid'
          />
        </Zoom>
      </div>
    );
  }
}

export default Home;
