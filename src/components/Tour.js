import React, { Component } from 'react';
import beach from '../beach.jpg';
import Title from './Title';

export class Tour extends Component {
  render() {
    return (
      <React.Fragment>
        <div
          id='tour'
          style={{
            backgroundImage: `url(${beach})`,
            backgroundSize: 'cover',
          }}>
          <Title name='tour' title='dates' />
        </div>
      </React.Fragment>
    );
  }
}

export default Tour;
