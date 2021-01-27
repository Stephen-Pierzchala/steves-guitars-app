import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import routes from "../../Routes/Routes";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import authTool from "../../Auth/auth";
import HomeIcon from "@material-ui/icons/Home";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
	appBarSpacer: theme.mixins.toolbar,
	drawer: {
		width: 300,
	},
	navLink: {
		color: "inherit",
		textDecoration: "none",
	},
}));

// Main Component
const Navbar = (props) => {
	const classes = useStyles();
	const [isOpen, setOpen] = useState(false);

	return (
		<nav>
			<div className={classes.appBarSpacer}></div>
			<Drawer
				anchor="left"
				open={isOpen}
				onClose={() => setOpen(false)}
				classes={{ paper: classes.drawer }}
			>
				<NavLinks setOpen={setOpen} />
			</Drawer>
			<AppBar variant="outlined">
				<Toolbar>
					<Grid container alignItems="center" justify="space-between">
						<Grid item>
							<IconButton
								edge="start"
								className={classes.menuButton}
								color="inherit"
								aria-label="menu"
								onClick={() => setOpen(true)}
							>
								<MenuIcon />
							</IconButton>
						</Grid>
						<Grid>
							<h3>Steve's Guitar Shop</h3>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
		</nav>
	);
};

// Goes inside of the navigation drawer, Shows all the links
const NavLinks = (props) => {
	const history = useHistory();
	const classes = useStyles();
	const location = useLocation();
	const [currentPage, setCurrentPage] = useState(location.pathname);

	const isActive = (path) => {
		return path === currentPage;
	};
	return (
		<React.Fragment>
			<List component="nav">
				<Grid
					container
					direction="column"
					justify="center"
					align="center"
				>
					<Grid item>
						<NavLink
							to="/"
							className={classes.navLink}
							onClick={() => {
								setCurrentPage("/");
								props.setOpen(false);
							}}
						>
							<ListItem selected={isActive("/")} button>
								<ListItemIcon>
									<HomeIcon />
								</ListItemIcon>
								<ListItemText primary={"Home"} />
							</ListItem>
						</NavLink>
					</Grid>

					{routes.map((routeItem) => {
						const Icon = routeItem.icon;
						return (
							<Grid item key={routeItem.path}>
								<NavLink
									to={routeItem.path}
									className={classes.navLink}
									onClick={() => {
										setCurrentPage(routeItem.path);
										props.setOpen(false);
									}}
								>
									<ListItem
										selected={isActive(routeItem.path)}
										button
									>
										<ListItemIcon>
											<Icon />
										</ListItemIcon>
										<ListItemText
											primary={routeItem.sidebarName}
										/>
									</ListItem>
								</NavLink>
							</Grid>
						);
					})}
					{authTool.isAuthenticated() && (
						<Grid item align="center">
							<Button
								fullWidth
								variant="outlined"
								size="small"
								color="secondary"
								disableFocusRipple
								onClick={() => {
									authTool.logOut();
									history.push("/Login");
									setCurrentPage("/Login");
									return;
								}}
							>
								Log Out
							</Button>
						</Grid>
					)}
				</Grid>
			</List>
		</React.Fragment>
	);
};

export default Navbar;
