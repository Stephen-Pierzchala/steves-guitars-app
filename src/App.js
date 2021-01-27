import "./App.css";
import { Switch, Route } from "react-router-dom";
import React from "react";
import Navbar from "./Components/Navigation/Navbar";
import routes from "./Routes/Routes";
import { BrowserRouter } from "react-router-dom";
import PrivateRoute from "./Routes/PrivateRoute";

function App() {
	return (
		<React.Fragment>
			<BrowserRouter>
				<Navbar />

				<Switch>
					{routes.reverse().map((arg) => {
						if (arg.public)
							return (
								<Route
									key={arg.path}
									path={arg.path}
									component={arg.component}
								/>
							);
						else
							return (
								<PrivateRoute
									key={arg.path}
									path={arg.path}
									component={arg.component}
								/>
							);
					})}
				</Switch>
			</BrowserRouter>
		</React.Fragment>
	);
}

export default App;
