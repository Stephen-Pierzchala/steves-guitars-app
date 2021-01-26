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
		minRating: 0,
		minPrice: 0,
		maxPrice: Infinity,
		showAcoustics: true,
		showElectrics: true,
	});

	const [sortOptions, setSortOptions] = useState({
		ascending: true,
		method: "alphabetical",
	});

	const [searchText, setSearchText] = useState("");

	const [productList, setProductList] = useState([]);

	const applyOptions = () => {
		let displayed = productList;

		//apply search text
		if (searchText) {
			displayed = displayed.filter((item) => {
				return item.name.includes(searchText);
			});
		}

		//Apply filters
		displayed = displayed.filter((item) => {
			return (
				item.rating >= filterOptions.minRating &&
				item.price >= filterOptions.minPrice &&
				item.price <= filterOptions.maxPrice
			);
		});

		if (!filterOptions.showElectrics) {
			displayed = displayed.filter((item) => {
				return item.type !== "Electric";
			});
		}

		if (!filterOptions.showAcoustics) {
			displayed = displayed.filter((item) => {
				return item.type !== "Acoustic";
			});
		}

		//Sort products

		//rating, price, alphabetical, date added
		switch (sortOptions.method) {
			case "price":
				displayed.sort((a, b) => a.price - b.price);
				break;
			case "dateAdded":
				displayed.sort((a, b) => a.createdAt < b.createdAt);
				break;
			case "rating":
				displayed.sort((a, b) => a.rating < b.rating);
				break;
			default:
				//alphabetical
				displayed.sort((a, b) => a.name.localeCompare(b.name));
				break;
		}

		//reverse if descending
		if (!sortOptions.ascending) displayed.reverse();

		//display the products
		return displayed.map((product) => {
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
					createdAt={product.createdAt}
				/>
			);
		});
	};

	//fetch products on page load
	useEffect(() => {
		const url = process.env.REACT_APP_API_URL + "products/getproducts";
		axios
			.get(url)
			.then(function (response) {
				setProductList(response.data.products);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, []);

	return (
		<React.Fragment>
			<Container component="main" maxWidth="lg">
				<CssBaseline />
				<Paper className={styles.paper} variant="outlined" square>
					<Controls
						searchText={searchText}
						setSearchText={setSearchText}
						filterOptions={filterOptions}
						setFilterOptions={setFilterOptions}
						sortOptions={sortOptions}
						setSortOptions={setSortOptions}
					/>
					<Divider />

					<Grid
						className={styles.products}
						container
						alignItems="center"
						spacing={3}
					>
						{applyOptions()}
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
						onChange={(event) => {
							props.setSearchText(event.target.value);
						}}
						value={props.searchText}
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
