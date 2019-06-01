import React from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	button: {
		margin: theme.spacing(1),
	},
	leftIcon: {
		marginRight: theme.spacing(1),
	},
	rightIcon: {
		marginLeft: theme.spacing(1),
	},
	iconSmall: {
		fontSize: 20,
	},
}));

function SearchButton (props) {
	const classes = useStyles();

	return (
		<div>
            
			<Button variant="contained" color="primary" className={classes.button} onClick={props.handleClick}>
				Search For Adoptable Dogs
				<Icon className={classes.rightIcon}>search</Icon>
			</Button>
		</div>
	);
}

export default SearchButton;
