import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Textfield from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";

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

	return (
		<Container component="main" className={styles.logInBox} maxWidth="sm">
			<CssBaseline>
				<Paper className={styles.paper} elevation={5}>
					<Typography className={styles.titleText} variant="h4">
						Log In
					</Typography>

					<form className={styles.form} action="">
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
							autoFocus
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
