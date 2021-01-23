import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import React from "react";
import Navbar from "./Components/Navigation/Navbar";
import routes from "./Routes/Routes";
const authTool = require("./Auth/auth");

function App() {
	return (
		<React.Fragment>
			<Navbar />

			<Switch>
				{routes.reverse().map((arg) => {
					const Component = arg.component;
					if (arg.public === true || authTool.isAuthenticated()) {
						return (
							<Route key={arg.path} path={arg.path} exact>
								<Component />
							</Route>
						);
					} else {
						return (
							<Route key={arg.path} path={arg.path} exact>
								<Redirect to="/Login" />
							</Route>
						);
					}
				})}
			</Switch>
		</React.Fragment>
	);
}

export default App;
