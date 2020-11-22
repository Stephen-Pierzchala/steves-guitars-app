import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Checkout from "./Components/Checkout/Checkout";
import ViewCart from "./Components/ViewCart/ViewCart";

function App() {
	return (
		<main>
			<Switch>
				<Route path="/" component={Home} exact />
				<Route path="/Login" component={Login} />
				<Route path="/Checkout" component={Checkout} />
				<Route path="/ViewCart" component={ViewCart} />
			</Switch>
		</main>
	);
}

export default App;
