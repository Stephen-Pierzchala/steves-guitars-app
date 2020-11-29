import React, { useState } from "react";
import {
	Container,
	CssBaseline,
	Paper,
	Grid,
	Popover,
	Button,
	Typography,
	Slider,
	TextField,
	Divider,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";
import Product from "./Product";

// Style the homepage
const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(4),
		padding: theme.spacing(2),
		textAlign: "center",
	},
	controls: {
		marginBottom: theme.spacing(4),
	},
	filterOptions: {
		textAlign: "center",
		minWidth: "300px",
		padding: theme.spacing(10, 2),
		// width: "300px",
	},
	controlButton: {
		paddingBottom: theme.spacing(1),
		textTransform: "none",
	},
	products: {
		marginTop: theme.spacing(2),
	},
}));

// The entire homepage component.
const Home = () => {
	const styles = useStyles();

	// const [filterOptions, setFilterOptions] = useState({
	// 	minRating: 1,
	// 	maxRating: 5,
	// 	minPrice: 0,
	// 	maxPrice: 100000,
	// 	showAcoustics: true,
	// 	showElectrics: true,
	// });

	const [filterMinMaxRating, setFilterMinMaxRating] = useState([1, 5]);

	return (
		<React.Fragment>
			<Container component="main" maxWidth="lg">
				<CssBaseline />
				<Paper className={styles.paper} variant="outlined" square>
					<Controls
						filterMinMaxRating={filterMinMaxRating}
						setFilterMinMaxRating={setFilterMinMaxRating}
					/>
					<Divider />

					<Grid
						className={styles.products}
						container
						alignItems="center"
						spacing={3}
					>
						<Product
							name="Fender Stratocaster"
							price={"500"}
							description="a nice guitar to play with your friends, or whenever you want really!"
							rating={5}
						/>
						<Product
							name="Fender Strat"
							price={"500"}
							description="a nice guitar to play with your friends, or whenever you want really!"
						/>
						<Product
							name="Fender Strat"
							price={"500"}
							description="a nice guitar to play with your friends, or whenever you want really!"
						/>
						<Product
							name="Fender Strat"
							price={"500"}
							description="a nice guitar to play with your friends, or whenever you want really!"
						/>
					</Grid>
				</Paper>
			</Container>
		</React.Fragment>
	);
};

// The topmost bar that contains the filter/sort/search controls
const Controls = (props) => {
	const styles = useStyles();
	const [isFilterOpen, setFilterOpen] = useState(false);
	const [filterAnchor, setFilterAnchor] = useState(false);

	const handleRatingChange = (event, newValue) => {
		props.setFilterMinMaxRating(newValue);
	};

	return (
		<React.Fragment>
			<Grid className={styles.controls} container>
				<Grid item xs={12}>
					<TextField placeholder="Search for Keywords" fullWidth>
						{" "}
					</TextField>
				</Grid>
				<Grid item xs={6}>
					<Button
						fullWidth
						className={styles.controlButton}
						onClick={(event) => {
							setFilterAnchor(event.currentTarget);
							setFilterOpen(true);
						}}
					>
						<Typography variant="h6">Filter</Typography>
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
							elevation: 3,
							className: styles.filterOptions,
						}}
					>
						<Slider
							marks
							step={1}
							value={props.filterMinMaxRating}
							onChange={handleRatingChange}
							valueLabelDisplay="on"
							min={1}
							max={5}
							track="inverted"
							label="Rating"
						/>
						<Rating defaultValue={4.3}></Rating>
					</Popover>
				</Grid>
				<Grid item xs={6}>
					<Button
						className={styles.controlButton}
						onClick={(event) => {
							setFilterAnchor(event.currentTarget);
							setFilterOpen(true);
						}}
					>
						Sort
					</Button>
				</Grid>
			</Grid>
		</React.Fragment>
	);
};

export default Home;
