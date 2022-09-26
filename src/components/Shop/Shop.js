import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
	const [products, setProducts] = useState([]);
	const [cart, setCart] = useState([]);

	useEffect(() => {
		fetch('products.json')
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, []);

	useEffect(() => {
		const storedCart = getStoredCart();
		const savedCart = [];
		for (const id in storedCart) {
			const addedProduct = products.find((product) => product.id === id);
			if (addedProduct) {
				const quantity = storedCart[id];
				addedProduct.quantity = quantity;
				savedCart.push(addedProduct);
			}
		}
		setCart(savedCart);
	}, [products]);

	const handalAddToCart = (product) => {
		const newCart = [...cart, product];
		setCart(newCart);
		addToDb(product.id);
	};

	return (
		<div className="py-5">
			<div className="container ">
				<h1 className="text-center pb-3 text-primary">All Products </h1>
				<div className="row ">
					<div className="col-md-9">
						<div className="productList">
							{products.map((product) => (
								<Product
									key={product.id}
									product={product}
									handalAddToCart={handalAddToCart}
								></Product>
							))}
						</div>
					</div>
					<div className="col-md-3 orderSum">
						<Cart cart={cart}></Cart>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Shop;
