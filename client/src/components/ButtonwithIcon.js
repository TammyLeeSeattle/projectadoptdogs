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

function IconLabelButtons() {
	const classes = useStyles();

	return (
		<div>
            
			<Button variant="contained" color="primary" className={classes.button}>
				Create
				<Icon className={classes.rightIcon}>person_add</Icon>
			</Button>
		</div>
	);
}

export default IconLabelButtons;
