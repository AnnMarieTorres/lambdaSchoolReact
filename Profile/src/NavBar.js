import React, { Component } from 'react';
import NavBarButton from './NavBarButton.js';
import NavBarHeading from './NavBarHeading.js';
import './NavBar.css';

export default class NavBar extends Component {
	render(){
		return(
			<div className="navbar">
				<NavBarHeading />
				<div className="buttons">
					<NavBarButton text={'Home'} />
					<NavBarButton text={'FAQ'} />
					<NavBarButton text={'ContactMe'} />
				</div>
			</div>
		);
	}
}