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
import { NavLink, useLocation } from "react-router-dom";

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
					<IconButton
						edge="start"
						className={classes.menuButton}
						color="inherit"
						aria-label="menu"
						onClick={() => setOpen(true)}
					>
						<MenuIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
		</nav>
	);
};

// Goes inside of the navigation drawer, Shows all the links
const NavLinks = (props) => {
	const classes = useStyles();

	const [currentPage, setCurrentPage] = useState(useLocation().pathname);

	const isActive = (path) => {
		return path === currentPage;
	};

	return (
		<React.Fragment>
			<List component="nav">
				{routes.map((routeItem) => {
					const Icon = routeItem.icon;
					return (
						<NavLink
							key={routeItem.path}
							to={routeItem.path}
							className={classes.navLink}
							onClick={() => {
								setCurrentPage(routeItem.path);
								props.setOpen(false);
							}}
						>
							<ListItem
								// key={routeItem.path}
								selected={isActive(routeItem.path)}
								button
							>
								<ListItemIcon>
									<Icon />
								</ListItemIcon>
								<ListItemText primary={routeItem.sidebarName} />
							</ListItem>
						</NavLink>
					);
				})}
			</List>
		</React.Fragment>
	);
};

export default Navbar;
