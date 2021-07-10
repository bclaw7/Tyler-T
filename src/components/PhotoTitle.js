import React, { Component } from 'react';
import Title from './Title';
import beach from '../beach.jpg';

export class PhotoTitle extends Component {
  render() {
    return (
      <React.Fragment>
        <div
          id='tour'
          style={{
            backgroundImage: `url(${beach})`,
            backgroundSize: 'cover',
          }}>
          <Title name='photo' title='gallery' />
        </div>
      </React.Fragment>
    );
  }
}

export default PhotoTitle;
