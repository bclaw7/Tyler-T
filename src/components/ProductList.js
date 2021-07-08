import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import { ProductConsumer } from '../context';
import rings from '../tree-rings.jpg';

export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <div
          style={{
            backgroundImage: `url(${rings})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
          <div className='py-5'>
            <div className='container'>
              <Title name='merch' title='store' />
              <div className='row'>
                <ProductConsumer>
                  {(value) => {
                    return value.products.map((product) => {
                      return <Product key={product.id} product={product} />;
                    });
                  }}
                </ProductConsumer>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
