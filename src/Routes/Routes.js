import Login from "../Components/Login/Login";
import Checkout from "../Components/Checkout/Checkout";
import ViewCart from "../Components/ViewCart/ViewCart";
import Register from "../Components/Register/Register";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PaymentIcon from "@material-ui/icons/Payment";
import AddIcon from "@material-ui/icons/Add";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";

const routes = [
	{
		path: "/Login",
		sidebarName: "Login",
		component: Login,
		icon: MeetingRoomIcon,
		public: true,
	},
	{
		path: "/CreateAnAccount",
		sidebarName: "Create An Account",
		component: Register,
		icon: AddIcon,
		public: true,
	},
	{
		path: "/Checkout",
		sidebarName: "Checkout",
		component: Checkout,
		icon: PaymentIcon,
		public: false,
	},
	{
		path: "/ViewCart",
		sidebarName: "View Cart",
		component: ViewCart,
		icon: ShoppingCartIcon,
		public: false,
	},
	//The default route is added manually to properly configure with netlify
	// {
	// 	path: "/",
	// 	sidebarName: "Home",
	// 	component: Home,
	// 	authRequired: false,
	// 	icon: HomeIcon,
	// 	public: true,
	// },
];

export default routes;
