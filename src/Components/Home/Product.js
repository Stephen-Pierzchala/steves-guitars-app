import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid, Fab } from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import StarIcon from "@material-ui/icons/Star";
import { Rating } from "@material-ui/lab";
import "./Product.css";
import { addToCart, removeFromCart } from "../../Controllers/Cart.js";

const useStyles = makeStyles((theme) => ({
	icons: {
		padding: theme.spacing(1),
	},
	rating: {
		flexGrow: "2",
	},
}));

const Product = (props) => {
	const styles = useStyles();

	return (
		<React.Fragment>
			<Grid item sm={4}>
				<Paper variant="outlined" square>
					<div className="product-item">
						<img src={props.imageLink} alt="guitar" />

						<div className="product-info">
							<h1>{props.name}</h1>
							<h2>${props.price}</h2>
							<p>{props.description}</p>
						</div>
					</div>

					<h3>{props.name}</h3>

					<Grid
						container
						alignItems="center"
						justify="flex-end"
						spacing={1}
						className={styles.icons}
					>
						<Grid item className={styles.rating}>
							<Rating value={props.rating} readOnly></Rating>
						</Grid>
						<Grid item>
							<Fab
								variant="extended"
								color="primary"
								size="small"
								onClick={() => removeFromCart(props.id)}
							>
								{props.isFavorite ? (
									<StarIcon style={{ color: "gold" }} />
								) : (
									<StarIcon />
								)}
								Favorite
							</Fab>
						</Grid>
						<Grid item>
							<Fab
								color="primary"
								size="small"
								onClick={() => {
									addToCart(props.id);
								}}
							>
								<AddShoppingCartIcon />
							</Fab>
						</Grid>
					</Grid>
				</Paper>
			</Grid>
		</React.Fragment>
	);
};

export default Product;
