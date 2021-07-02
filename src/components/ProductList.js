import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../context";
import beachflip from "../beach-down.jpg";

export default class ProductList extends Component {
	render() {
		return (
			<React.Fragment>
				<div
					className="py-5"
					style={{
						backgroundImage: `url(${beachflip})`,
						backgroundSize: "cover",
					}}
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
			</React.Fragment>
		);
	}
}
