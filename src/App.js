import "./App.css";
import { Switch, Route } from "react-router-dom";
import React from "react";
import Navbar from "./Components/Navigation/Navbar";
import routes from "./Routes/Routes";
import { BrowserRouter } from "react-router-dom";
import PrivateRoute from "./Routes/PrivateRoute";
import Home from "./Components/Home/Home";

function App() {
	return (
		<BrowserRouter>
			<Navbar />

			<Switch>
				<Route path="/" exact>
					<Home />
				</Route>

				{routes.reverse().map((arg) => {
					let Comp = arg.component;
					if (arg.public)
						return (
							<Route key={arg.path} path={arg.path}>
								<Comp />
							</Route>
						);
					else
						return (
							<PrivateRoute
								key={arg.path}
								path={arg.path}
								component={Comp}
							/>
						);
				})}
			</Switch>
		</BrowserRouter>
	);
}

export default App;
