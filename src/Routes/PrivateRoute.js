import { Route, Redirect } from "react-router-dom";
const authTool = require("../Auth/auth");

const PrivateRoute = (props) => {
	const Comp = props.component;
	return (
		<Route
			path={props.path}
			key={props.key}
			exact
			render={() => {
				if (authTool.isAuthenticated()) {
					return <Comp />;
				} else {
					return <Redirect to="/Login" />;
				}
			}}
		/>
	);
};

export default PrivateRoute;
