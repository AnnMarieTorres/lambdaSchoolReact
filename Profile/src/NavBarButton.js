import React, { Component } from 'react';
import './NavBarButton.css'

export default class NavBarButton extends Component {
	render(){
		return(
			<button className="navbarbutton">
				{ this.props.text }
			</button>
		);
	}
}