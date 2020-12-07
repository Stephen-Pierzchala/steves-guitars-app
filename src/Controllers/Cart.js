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
		let item = cart.items.find((cartItem) => {
			return cartItem.id === id;
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

const removeFromCart = (id) => {
	let cart = localStorage.getItem("cart");
	if (!cart) return;
	cart = JSON.parse(cart);

	//search for the item in the cart
	let item = cart.items.find((cartItem) => {
		return cartItem.id === id;
	});

	if (!item) return;

	if (item.quantity === 1) {
		cart.items = cart.items.filter((cartItem) => {
			return cartItem.id !== id;
		});
	} else {
		item.quantity--;
	}
	console.log(cart);
	setCart(cart);
};

const setCart = (cart) => {
	localStorage.setItem("cart", JSON.stringify(cart));
};

export { addToCart, removeFromCart };
