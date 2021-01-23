//access token will be stored here
let accessToken = null;

const isAuthenticated = () => {
	console.log("checking to see if logged in...");
	if (accessToken != null) {
		console.log("Logged In!");
		return true;
	}
	console.log("Not logged in.");
	return false;
};

const getAccessToken = () => {
	return accessToken;
};

module.exports = { isAuthenticated, getAccessToken };
