import { React } from 'react';
import classes from './Logo.module.css';

function Logo(props) {
	return (
		<h1 className={classes.LogoContainer}>
			<span className={classes.LogoText}>MHS Robotics</span>
		</h1>
	)
}

export default Logo;
