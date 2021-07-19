import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonContainer } from '../Button';
import ProductNavbar from '../ProductNavbar';
import { Container, Row } from 'react-bootstrap';

export default function EmptyCart() {
  return (
    <>
      <ProductNavbar />
      <Container className='mt-5'>
        <Row>
          <div className='col-10 py-5 mx-auto text-center text-warning'>
            <h1>your cart is empty</h1>
            <Link to='/productlist'>
              <ButtonContainer>back to merch store</ButtonContainer>
            </Link>
          </div>
        </Row>
      </Container>
    </>
  );
}
