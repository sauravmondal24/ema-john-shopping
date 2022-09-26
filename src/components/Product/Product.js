import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = ({ product, handalAddToCart }) => {
	const { img, name, price, seller, ratings } = product;

	return (
		<div>
			<div class=" my-3">
				<div class="card h-100">
					<img src={img} className="card-img-top" alt="" />
					<div class="card-body">
						<h5 class="card-title">{name}</h5>
						<h6 class="card-text">Price: ${price}</h6>
						<br />
						<p class="card-text">Manufacturer: {seller}</p>
						<p class="card-text">Ratings: {ratings}</p>
					</div>
					<div class="card-footer">
						<button
							onClick={() => handalAddToCart(product)}
							class="btn btn-warning w-100"
						>
							Add To Cart
							<FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
							{/* <FontAwesomeIcon icon="fa-solid fa-cart-plus" /> */}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Product;
