import React, { useState } from "react";
import {
	Container,
	CssBaseline,
	Paper,
	Grid,
	Button,
	Typography,
	TextField,
	Divider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Product from "./Product";
import Filter from "./Filter";
import Sort from "./Sort";

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

	const [filterOptions, setFilterOptions] = useState({
		minRating: 1,
		minPrice: 0,
		maxPrice: 100000,
		showAcoustics: true,
		showElectrics: true,
	});

	const [sortOptions, setSortOptions] = useState({
		ascending: true,
		method: "alphabetical",
	});

	return (
		<React.Fragment>
			<Container component="main" maxWidth="lg">
				<CssBaseline />
				<Paper className={styles.paper} variant="outlined" square>
					<Controls
						filterOptions={filterOptions}
						setFilterOptions={setFilterOptions}
						sortOptions={sortOptions}
						setSortOptions={setSortOptions}
					/>
					<Divider />

					{Object.keys(filterOptions).map((key) => {
						return key + " " + filterOptions[key] + "    ";
					})}

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

	const [isSortOpen, setSortOpen] = useState(false);
	const [sortAnchor, setSortAnchor] = useState(false);

	return (
		<React.Fragment>
			<Grid className={styles.controls} container>
				<Grid item xs={12}>
					<TextField
						placeholder="Search for Keywords"
						fullWidth
					></TextField>
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
					<Filter
						isFilterOpen={isFilterOpen}
						setFilterAnchor={setFilterAnchor}
						filterAnchor={filterAnchor}
						setFilterOpen={setFilterOpen}
						filterOptions={props.filterOptions}
						setFilterOptions={props.setFilterOptions}
					/>
				</Grid>

				<Grid item xs={6}>
					<Button
						className={styles.controlButton}
						onClick={(event) => {
							setSortAnchor(event.currentTarget);
							setSortOpen(true);
						}}
					>
						<Typography variant="h6">Sort</Typography>
					</Button>
					<Sort
						isSortOpen={isSortOpen}
						setSortOpen={setSortOpen}
						sortAnchor={sortAnchor}
						setSortAnchor={setSortAnchor}
						sortOptions={props.sortOptions}
						setSortOptions={props.setSortOptions}
					/>
				</Grid>
			</Grid>
		</React.Fragment>
	);
};

export default Home;
