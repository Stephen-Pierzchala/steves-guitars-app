import React, { useState, useEffect } from "react";
import {
	Container,
	CssBaseline,
	Paper,
	Grid,
	Button,
	Typography,
	TextField,
	Divider,
	CircularProgress,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Product from "./Product";
import Filter from "./Filter";
import Sort from "./Sort";
const axios = require("axios");

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
	searchBar: {
		marginBottom: theme.spacing(4),
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

	const [productList, setProductList] = useState([]);

	const applyOptions = () => {
		let guitars = productList;
		guitars.sort((a, b) => {
			return a.name.localeCompare(b.name);
		});
		guitars = guitars.filter((item) => {
			return item.type === "Acoustic";
		});

		return guitars.map((product) => {
			return (
				<Product
					key={product.id}
					name={product.name}
					price={product.price}
					description={product.description}
					type={product.type}
					rating={product.rating}
					isFavorite={true}
					imageLink={product.imageLink}
					id={product.id}
				/>
			);
		});
	};

	useEffect(() => {}, [sortOptions, filterOptions]);

	//fetch products on page load
	useEffect(() => {
		const url = process.env.REACT_APP_API_URL + "products/getproducts";
		console.log(url);
		axios
			.get(url, {
				// params: {
				// 	ID: 12345,
				// },
			})
			.then(function (response) {
				console.log(response.data.products);
				setProductList(response.data.products);
			})
			.catch(function (error) {
				console.log(error);
				console.log(url);
			})
			.then(function () {
				console.log("done.");
			});
	}, []);

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

					{/* {Object.keys(filterOptions).map((key) => {
						return key + " " + filterOptions[key] + "    ";
					})} */}

					<Grid
						className={styles.products}
						container
						alignItems="center"
						spacing={3}
					>
						{applyOptions()}
						{/* {productList.length ? (
							productList.map((product) => {
								return (
									<Product
										key={product.id}
										name={product.name}
										price={product.price}
										description={product.description}
										type={product.type}
										rating={product.rating}
										isFavorite={true}
										imageLink={product.imageLink}
										id={product.id}
									/>
								);
							})
						) : (
							<Grid container justify="center">
								<CircularProgress />
							</Grid>
						)} */}
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
						className={styles.searchBar}
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
						fullWidth
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
