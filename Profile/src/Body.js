import React, { Component } from 'react';
import './Body.css';
import profile from './profile.jpg';


export default class Body extends Component {
	render(){
		return(
			<div className="body">
				<p>I am a software engineer trying to expand my skills by learning front end development</p>
				<img src={profile} alt='' />
				<p><a href='https://github.com/AnnMarieTorres'>My GitHub</a></p>
			</div>

		);
	}
}