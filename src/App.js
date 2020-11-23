import "./App.css";
import { Switch, Route } from "react-router-dom";
import React from "react";
import Navbar from "./Components/Navigation/Navbar";
import routes from "./Routes/Routes";

function App() {
	return (
		<React.Fragment>
			<Navbar />

			<Switch>
				{routes.reverse().map((arg) => {
					return (
						<Route
							key={arg.path}
							path={arg.path}
							component={arg.component}
							exact
						/>
					);
				})}
			</Switch>
		</React.Fragment>
	);
}

export default App;
