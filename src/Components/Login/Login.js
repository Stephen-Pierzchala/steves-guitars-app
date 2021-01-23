import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Textfield from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";

const axios = require("axios");

const useStyles = makeStyles((theme) => ({
	logInBox: {
		// backgroundColor: theme.palette.primary.main,
		marginTop: theme.spacing(14),
	},
	paper: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	titleText: {
		// color: "white",
		margin: theme.spacing(4, 0, 2),
	},
	submitButton: {
		margin: theme.spacing(6, 0, 2),
	},
	linkText: {
		margin: theme.spacing(1, 0, 4),
	},
	form: {
		width: "100%",
		padding: theme.spacing(0, 4),
	},
}));

const Login = () => {
	const styles = useStyles();

	const [state, setState] = useState({
		email: "",
		password: "",
	});

	const handleChange = (event) => {
		const name = event.target.name;
		setState({ ...state, [name]: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		const url = process.env.REACT_APP_API_URL + "auth/login";
		console.log(url);
		axios
			.post(url, state)
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			})
			.then(function () {
				console.log("done.");
			});
	};

	return (
		<Container component="main" className={styles.logInBox} maxWidth="sm">
			<CssBaseline>
				<Paper className={styles.paper} elevation={5}>
					<Typography className={styles.titleText} variant="h4">
						Log In
					</Typography>

					<form
						className={styles.form}
						onSubmit={handleSubmit}
						action=""
					>
						<Textfield
							InputLabelProps={{ shrink: true }}
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="email"
							label="Email Address"
							name="email"
							autoComplete="email"
							autoFocus
							value={state.email}
							onChange={handleChange}
						/>
						<Textfield
							InputLabelProps={{ shrink: true }}
							type="password"
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="password"
							label="Password"
							name="password"
							autoComplete="current-password"
							autoFocus
							value={state.password}
							onChange={handleChange}
							error={state.emailError}
						/>

						<Button
							className={styles.submitButton}
							type="submit"
							variant="contained"
							color="primary"
							size="large"
							fullWidth
							disableRipple
							disableFocusRipple
						>
							Log in
						</Button>
					</form>
					<Grid
						container
						alignItems="center"
						justify="center"
						spacing={3}
					>
						<Grid item className={styles.linkText}>
							<Link href="#" variant="body2">
								New Kid in Town? Sign Up
							</Link>
						</Grid>
					</Grid>
				</Paper>
			</CssBaseline>
		</Container>
	);
};

export default Login;
