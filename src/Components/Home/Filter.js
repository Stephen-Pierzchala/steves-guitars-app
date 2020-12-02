import {
	Popover,
	TextField,
	Divider,
	Grid,
	Checkbox,
	FormControlLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	filter: {
		textAlign: "center",
		minWidth: "300px",
		padding: theme.spacing(2),
	},
	checkbox: {
		marginRight: theme.spacing(8),
	},
}));

const Filter = (props) => {
	const styles = useStyles();

	const handleFieldUpdate = (event) => {
		const value = event.target.value;
		const fieldName = event.target.name;

		// validate number only input is valid before updating the state
		if (isNaN(value)) {
			return;
		}

		props.setFilterOptions({
			...props.filterOptions,
			[fieldName]: value,
		});
	};

	const handleCheck = (event) => {
		const fieldName = event.target.name;
		props.setFilterOptions({
			...props.filterOptions,
			[fieldName]: !props.filterOptions[fieldName],
		});
	};

	return (
		<Popover
			open={props.isFilterOpen}
			onClose={() => {
				props.setFilterOpen(false);
			}}
			anchorEl={props.filterAnchor}
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
				className: styles.filter,
			}}
		>
			<Grid container spacing={3} direction="column">
				<Grid item>
					<TextField
						size="small"
						variant="outlined"
						fullWidth
						label="Min Rating"
						name="minRating"
						value={props.filterOptions.minRating}
						onChange={handleFieldUpdate}
					></TextField>
				</Grid>
				<Divider />
				<Grid item>
					<TextField
						size="small"
						variant="outlined"
						fullWidth
						label="Min Price"
						name="minPrice"
						value={props.filterOptions.minPrice}
						onChange={handleFieldUpdate}
					></TextField>
				</Grid>
				<Grid item>
					<TextField
						size="small"
						variant="outlined"
						fullWidth
						label="Max Price"
						name="maxPrice"
						value={props.filterOptions.maxPrice}
						onChange={handleFieldUpdate}
					></TextField>
				</Grid>
				<Divider />
				<Grid container direction="column" alignItems="flex-end">
					<Grid item className={styles.checkbox}>
						<FormControlLabel
							control={<Checkbox color="primary" size="small" />}
							label="Electric Guitars"
							labelPlacement="start"
							onChange={handleCheck}
							name="showElectrics"
							checked={props.filterOptions.showElectrics}
						/>
					</Grid>
					<Grid item className={styles.checkbox}>
						<FormControlLabel
							control={<Checkbox color="primary" size="small" />}
							label="Acoustic Guitars"
							labelPlacement="start"
							onChange={handleCheck}
							name="showAcoustics"
							checked={props.filterOptions.showAcoustics}
						/>
					</Grid>
				</Grid>
			</Grid>
		</Popover>
	);
};

export default Filter;
