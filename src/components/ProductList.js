import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../context";
import beach from "../beach.jpg";

export default class ProductList extends Component {
	render() {
		return (
			<React.Fragment>
                <div style={{
						backgroundImage: `url(${beach})`,
						backgroundSize: "cover",
					}}>
				<div
					className="py-5"
					
				>
					<div id="productList" className="container">
						<Title name="merch" title="store" />
						<div className="row">
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
