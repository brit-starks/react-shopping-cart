import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const Item = props => {

	const  cart  = useContext(CartContext);
	
	return (
		<div className="shopping-cart_item">
			<img src={cart.image} alt={`${cart.title} book`} />


			<div>
				<h1>{cart.title}</h1>
				<p>$ {cart.price}</p>
				<button>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;
