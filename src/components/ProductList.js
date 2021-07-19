import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import { ProductConsumer } from '../context';
import ProductNavbar from './ProductNavbar';
import { Container, Row } from 'react-bootstrap';

export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <ProductNavbar>
          <Container>
            <Title name='merch' title='store' />
            <Row>
              <ProductConsumer>
                {(value) => {
                  return value.products.map((product) => {
                    return <Product key={product.id} product={product} />;
                  });
                }}
              </ProductConsumer>
            </Row>
          </Container>
        </ProductNavbar>
      </React.Fragment>
    );
  }
}
