import React, { Component } from 'react';
import beach from '../beach.jpg';
import Title from './Title';

export class Tour extends Component {
  render() {
    return (
      <React.Fragment>
        <div
          className='pt-5'
          id='tour'
          style={{
            backgroundImage: `url(${beach})`,
            backgroundSize: 'cover',
          }}>
          <Title name='shows' title='!!!' />
        </div>
      </React.Fragment>
    );
  }
}

export default Tour;
