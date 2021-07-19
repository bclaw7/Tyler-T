import React, { useState } from 'react';
import paper from '../images/paper.jpeg';
import Title from './Title';

const ContactForm = () => {
  const [status, setStatus] = useState('Submit');
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch('http://localhost:5000/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(details),
    });
    setStatus('Submit');
    let result = await response.json();
    alert(result.status);
  };
  return (
    <div
      className='py-5'
      style={{ backgroundImage: `url(${paper})`, backgroundSize: 'cover' }}>
      <Title name='contact' title='us' />
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='name' className='form-label fs-3 text-primary'>
              Name:
            </label>
            <input type='text' id='name' className='form-control' required />
          </div>
          <div className='mb-3'>
            <label htmlFor='email' className='form-label fs-3 text-primary'>
              Email:
            </label>
            <input type='email' id='email' className='form-control' required />
          </div>
          <div className='mb-3'>
            <label htmlFor='message' className='form-label fs-3 text-primary'>
              Message:
            </label>
            <textarea id='message' className='form-control' rows='3' required />
          </div>
          <div className='d-grid gap-2 mb-3 pt-3'>
            <button type='submit' className='btn btn-success btn-lg fs-3'>
              {status}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
