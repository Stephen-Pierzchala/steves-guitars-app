import React, { useState } from "react";
import {
	Container,
	CssBaseline,
	Paper,
	Grid,
	Popover,
	Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	main: {
		color: "red",
	},
	paper: {
		marginTop: theme.spacing(4),
		textAlign: "center",
	},
	controls: {
		marginBottom: theme.spacing(4),
	},
	test: {
		textAlign: "center",
	},
	buttonChildren: {
		pointerEvents: "none",
	},
}));

const Home = () => {
	const styles = useStyles();

	return (
		<React.Fragment>
			<Container className={styles.main} component="main" maxWidth="lg">
				<CssBaseline />
				<Paper className={styles.paper} variant="outlined" square>
					<Controls />
					<h1>Home Page</h1>
					<p>Product Components Here</p>
				</Paper>
			</Container>
		</React.Fragment>
	);
};

const Controls = () => {
	const styles = useStyles();
	const [isFilterOpen, setFilterOpen] = useState(false);
	const [filterAnchor, setFilterAnchor] = useState(false);

	const handleClick = (event) => {
		setFilterAnchor(event.currentTarget);
		setFilterOpen(true);
	};

	return (
		<React.Fragment>
			<Grid className={styles.controls} container>
				<Grid className={styles.test} item xs={4}>
					<Button variant="outlined" onClick={handleClick}>
						Filter Options
					</Button>
					<Popover
						open={isFilterOpen}
						onClose={() => {
							setFilterOpen(false);
						}}
						anchorEl={filterAnchor}
						anchorOrigin={{
							vertical: "bottom",
							horizontal: "center",
						}}
						transformOrigin={{
							vertical: "top",
							horizontal: "center",
						}}
						PaperProps={{
							variant: "outlined",
							square: true,
							// className: styles.customClassHere,
						}}
					>
						<p>Option 1</p>
						<p>Option 2</p>
						<p>Option 3</p>
						<p>Option 4</p>
						<p>Option 5</p>
					</Popover>
				</Grid>
				<Grid className={styles.test} item xs={4}>
					Sort Options Here
				</Grid>
				<Grid className={styles.test} item xs={4}>
					Search Bar Here
				</Grid>
			</Grid>
		</React.Fragment>
	);
};

export default Home;
