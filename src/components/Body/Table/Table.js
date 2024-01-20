import { React, useState, useEffect } from 'react';
import classes from './Table.module.css';

async function getUserData(num_users) {
	const resp = await fetch("https://randomuser.me/api/?results=" + String(num_users));
	const users = await resp.json();
	return users.results;
}

function dataToTable(data) {
	return data.map( (u, i) => {
		return (
			<tr key={i}>
				<td className={classes.TableElement}>{u.name.first + " " + u.name.last}</td>
				<td className={classes.TableElement}>{u.email}</td>
				<td className={classes.TableElement}>{u.phone}</td>
				<td className={classes.TableElement}>{u.gender}</td>
			</tr>
		)
	})
}

function Table(props) {
	const [userdata, setUserData] = useState([]);
	useEffect(() => {
		getUserData(10).then( (d) => setUserData(d) );
	}, []);

	const table_data = dataToTable(userdata);

	return (
		<table className={classes.Table}>
			<tr>
				<th className={classes.TableElement}>Name</th>
				<th className={classes.TableElement}>Email</th>
				<th className={classes.TableElement}>Phone</th>
				<th className={classes.TableElement}>Gender</th>
			</tr>
			{ table_data }
		</table>
	)
}

export default Table;
