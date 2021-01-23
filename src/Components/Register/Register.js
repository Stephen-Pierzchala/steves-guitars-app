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
	RegisterBox: {
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

const Register = () => {
	const styles = useStyles();

	const [state, setState] = useState({
		email: "",
		password: "",
		confirmPassword: "",
	});

	const defaultState = {
		email: false,
		password: false,
		confirmPassword: false,
		errorText: "",
	};
	const [errorState, setErrorState] = useState(defaultState);

	const handleChange = (event) => {
		setState({ ...state, [event.target.name]: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		const url = process.env.REACT_APP_API_URL + "auth/register";
		console.log(url);
		axios
			.post(url, state)
			.then(function (response) {
				console.log(response);
				setErrorState(defaultState);

				console.log("success!");
			})
			.catch(function (error) {
				if (
					error.response &&
					(error.response.status === 401 ||
						error.response.status === 400)
				) {
					setErrorState({
						...defaultState,
						...error.response.data,
					});
				} else {
					setErrorState({
						...defaultState,
						errorText: "malformed request.",
					});
				}
			});
	};

	return (
		<Container
			className={styles.RegisterBox}
			component="main"
			maxWidth="sm"
		>
			<CssBaseline>
				<Paper className={styles.paper} elevation={5}>
					<Typography className={styles.titleText} variant="h4">
						Create an Account
					</Typography>

					<form
						className={styles.form}
						onSubmit={handleSubmit}
						action=""
					>
						<Textfield
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="email"
							label="Email Address"
							name="email"
							autoComplete="email"
							autoFocus
							onChange={handleChange}
							value={state.email}
							InputLabelProps={{ shrink: true }}
							error={errorState.email}
						/>
						<Textfield
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="password"
							label="Password"
							name="password"
							autoComplete="current-password"
							onChange={handleChange}
							value={state.password}
							InputLabelProps={{ shrink: true }}
							type="password"
							error={errorState.password}
						/>

						<Textfield
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="confirmPassword"
							label="Confirm Password"
							name="confirmPassword"
							autoComplete="current-password"
							onChange={handleChange}
							value={state.confirmPassword}
							InputLabelProps={{ shrink: true }}
							type="password"
							error={errorState.confirmPassword}
						/>
						<Grid container justify="center">
							<Grid item>
								<h3 style={{ color: "red" }}>
									{errorState.errorText}
								</h3>
							</Grid>
						</Grid>

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
							Register
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
								Already Have An Account? Sign In
							</Link>
						</Grid>
					</Grid>
				</Paper>
			</CssBaseline>
		</Container>
	);
};

export default Register;
