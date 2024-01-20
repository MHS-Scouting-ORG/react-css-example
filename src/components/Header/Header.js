import { React } from 'react';
import classes from './Header.module.css';
import Logo from './Logo/Logo';
import Banner from './Banner/Banner';

function Header(props) {
	return (
		<div className={classes.HeaderDiv}>
			<div className={classes.LogoCell}>
				<Logo />
			</div>
			<div className={classes.HeaderContentCell}>
				<Banner />
			</div>
		</div>
	)
}

export default Header;
