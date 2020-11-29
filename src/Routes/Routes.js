import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Checkout from "../Components/Checkout/Checkout";
import ViewCart from "../Components/ViewCart/ViewCart";
import Register from "../Components/Register/Register";

import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import DoneIcon from "@material-ui/icons/Done";

const routes = [
	{
		path: "/Login",
		sidebarName: "Login",
		component: Login,
		authRequired: false,
		icon: MenuIcon,
	},
	{
		path: "/CreateAnAccount",
		sidebarName: "Create An Account",
		component: Register,
		authRequired: false,
		icon: MenuIcon,
	},
	{
		path: "/Checkout",
		sidebarName: "Checkout",
		component: Checkout,
		authRequired: true,
		icon: DoneIcon,
	},
	{
		path: "/ViewCart",
		sidebarName: "View Cart",
		component: ViewCart,
		authRequired: false,
		icon: ShoppingCartIcon,
	},
	{
		path: "/",
		sidebarName: "Home",
		component: Home,
		authRequired: false,
		icon: HomeIcon,
	},
];

export default routes;