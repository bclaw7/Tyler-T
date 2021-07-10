import React, { Component } from 'react';
import Title from './Title';
import downbeach from '../beach-down.jpg';

export class Videos extends Component {
  render() {
    return (
      <div
        id='videos'
        style={{
          backgroundImage: `url(${downbeach})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        <Title name='live' title='videos' />
        <div className='container'>
          <div className='mx-auto text-center'>
            <iframe
              width='560'
              height='315'
              src='https://www.youtube.com/embed/vNXwM0cXtlk'
              frameBorder='0'
              allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
              title='live at Kinney Farm'></iframe>
            <iframe
              width='560'
              height='315'
              src='https://www.youtube.com/embed/qtHv_m7_KyE'
              title='Tyler T. live at Blind Pig'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen></iframe>
          </div>
        </div>
      </div>
    );
  }
}

export default Videos;
