import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default class Photos extends Component {
  render() {
    return (
      <Carousel>
        <div>
          <img
            src='img/tylert-aggie.jpeg'
            alt='live at The Aggie, Fort Collins, Colorado'
          />
          <p className='legend'>Live at The Aggie - Fort Collins, CO - 2015</p>
        </div>
        <div>
          <img src='img/tylert-backyard.jpg' alt='live at backyard' />
          <p className='legend'>
            Live at Kinney Farm - Fort Collins, CO - 2021
          </p>
        </div>
        <div>
          <img src='img/tylert-radio.jpg' alt='on air' />
          <p className='legend'>Live On Air at KZMU - Moab, UT - 2010</p>
        </div>
        <div>
          <img
            src='img/tylert-sepia.jpg'
            alt='live at haunted Hotel Monte Vista'
          />
          <p className='legend'>
            Live at Hotel Monte Vista - Flagstaff, AZ - 2010
          </p>
        </div>
      </Carousel>
    );
  }
}
