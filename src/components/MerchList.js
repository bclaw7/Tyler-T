import React, { Component } from 'react'
import Merch from './Merch';
import { ProductConsumer } from '../context';

export class MerchList extends Component {
    render() {
        return (
            <React.Fragment>
				<div className="py-5">
					<div className="container">
						<h1>Tyler T. Merch</h1>
						<div className="row">
							<ProductConsumer>
								{value => {
									return value.products.map( product =>{
                                        return <Merch key={product.id} product={product}/>;
                                    })
								}}
							</ProductConsumer>
						</div>
					</div>
				</div>
			</React.Fragment>
        )
    }
}

export default MerchList
