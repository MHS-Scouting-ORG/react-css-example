import { React } from 'react';
import classes from './Body.module.css';
import Header from '../Header/Header';
import Table from './Table/Table';

function Body(props) {
	return (
		<div className={classes.Body}>
			<div className={classes.Header}>
				<Header />
			</div>
			<div className={classes.Content}>
				<Table />
			</div>
		</div>
	)
}

export default Body;
