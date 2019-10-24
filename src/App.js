import React from 'react';
import './App.css';

import ImageCard from './ImageCard.component'

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}
	render() {
    return (
			<div className="body-div">
				<div className="card-div">
					<ImageCard id="card1"/>
					<ImageCard id="card2"/>
					<ImageCard id="card3"/>
				</div>
			</div>
		);
  }
}
