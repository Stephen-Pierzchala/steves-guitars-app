const addToCart = (id) => {
	console.log("adding item " + id + " to cart");

	let oldCart = localStorage.getItem("cart");

	//Cart DNE yet
	if (!oldCart) {
		let newCart = {
			items: [{ id: id, quantity: 1 }],
		};
		setCart(newCart);
	}

	//Cart exists
	else {
		let cart = JSON.parse(oldCart);

		//see if the added item is already in the cart
		let item = cart.items.find((item) => {
			return item.id === id;
		});
		if (item) item.quantity++;
		else {
			const newItem = { id: id, quantity: 1 };
			cart.items.push(newItem);
		}
		console.log(cart);
		setCart(cart);
	}
};

const removeFromCart = (id) => {};

const setCart = (cart) => {
	localStorage.setItem("cart", JSON.stringify(cart));
};

export { addToCart, removeFromCart };
