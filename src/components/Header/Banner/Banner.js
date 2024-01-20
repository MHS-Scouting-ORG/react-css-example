import { React } from 'react';
import classes from './Banner.module.css';

function Banner(props) {
	return (
		<h1 className={classes.Banner}>
			This is my main banner (could be a picture)
		</h1>
	)
}

export default Banner;
