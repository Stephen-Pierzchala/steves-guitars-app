import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
	Popover,
	Grid,
	Divider,
	FormControlLabel,
	Switch,
	Radio,
	RadioGroup,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	sort: {
		textAlign: "end",
		minWidth: "300px",
		padding: theme.spacing(2),
	},
	checkbox: {
		textAlign: "end",
		paddingRight: "30%",
		width: "100%",
	},
}));

const Sort = (props) => {
	const styles = useStyles();

	return (
		<React.Fragment>
			<Popover
				open={props.isSortOpen}
				onClose={() => {
					props.setSortOpen(false);
				}}
				anchorEl={props.sortAnchor}
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
					className: styles.sort,
				}}
			>
				<Grid container direction="column">
					<Grid item className={styles.checkbox}>
						<FormControlLabel
							control={
								<Switch
									onChange={(e) => {
										props.setSortOptions({
											...props.sortOptions,
											ascending: e.target.checked,
										});
									}}
									checked={props.sortOptions.ascending}
									name="isAscending"
									color="primary"
									size="small"
								/>
							}
							label="Ascending"
							labelPlacement="start"
						/>
					</Grid>

					<Divider />

					<RadioGroup
						name="method"
						value={props.sortOptions.method}
						onChange={(e) => {
							props.setSortOptions({
								...props.sortOptions,
								method: e.target.value,
							});
						}}
					>
						<Grid item className={styles.checkbox}>
							<FormControlLabel
								value="alphabetical"
								control={<Radio size="small" color="primary" />}
								label="Alphabetical"
								labelPlacement="start"
							/>
						</Grid>
						<Grid item className={styles.checkbox}>
							<FormControlLabel
								value="price"
								control={<Radio size="small" color="primary" />}
								label="Price"
								labelPlacement="start"
							/>
						</Grid>
						<Grid item className={styles.checkbox}>
							<FormControlLabel
								value="rating"
								control={<Radio size="small" color="primary" />}
								label="Rating"
								labelPlacement="start"
							/>
						</Grid>
						<Grid item className={styles.checkbox}>
							<FormControlLabel
								value="dateAdded"
								control={<Radio size="small" color="primary" />}
								label="Date Added"
								labelPlacement="start"
							/>
						</Grid>
					</RadioGroup>
				</Grid>
			</Popover>
		</React.Fragment>
	);
};

export default Sort;
