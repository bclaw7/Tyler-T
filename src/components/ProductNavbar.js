import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

class ProductNavbar extends Component {
  render() {
    return (
      <Navbar expand='lg' variant='light' bg='light'>
        <Container>
          <Link to='/'>
            <Navbar.Brand className='nav-title'>Tyler T.</Navbar.Brand>
          </Link>
          <Link to='/cart'>
            <Navbar.Brand className='justify-content-end'>
              <i className='bi bi-cart cart-icon'></i>
            </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    );
  }
}

export default ProductNavbar;
