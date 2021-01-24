//access token will be stored here

const getAccessToken = () => {
	return JSON.parse(localStorage.getItem("accessToken"));
};

const isAuthenticated = () => {
	const accessToken = getAccessToken();
	if (accessToken != null) return true;
	return false;
};

const setAccessToken = (token) => {
	localStorage.setItem("accessToken", JSON.stringify(token));
	return;
};

const logOut = () => {
	setAccessToken(null);
};

module.exports = { getAccessToken, isAuthenticated, setAccessToken, logOut };
