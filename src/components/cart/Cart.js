import React from 'react';

const Cart = ({ cart }) => {
	let total = 0;
	let shipping = 0;
	let tax = 0;
	for (const product of cart) {
		total = total + product.price;
		shipping = shipping + product.shipping;
		let taxs = (total * 0.05).toFixed(2);
		tax = parseFloat(taxs);
	}

	let totalPrice = parseFloat(total + shipping + tax);
	return (
		<div>
			<h2>Order Summary</h2>
			<p>Selected Item: {cart.length}</p>
			<p>Total Price: ${total}</p>
			<p>Total Shipping Charge: ${shipping}</p>
			<p>Tax: {tax}</p>
			<h5>Grand Total:$ {totalPrice}</h5>
		</div>
	);
};

export default Cart;
