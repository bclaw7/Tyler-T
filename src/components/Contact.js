import React from 'react';
import rings from '../tree-rings.jpg';
import { Title } from './Title';

function Contact() {
  return (
    <div
      style={{
        backgroundImage: `url(${rings})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
      <Title name='contact' title='us' />
      <form></form>
    </div>
  );
}

export default Contact;
