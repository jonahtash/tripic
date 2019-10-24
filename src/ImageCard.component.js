import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

class ImageCard extends React.Component {
	constructor(props) {
		super(props);
		this.upload = React.createRef();
		this.changeFile= this.changeFile.bind(this);
		this.state = {
			image: "logo512.png"
		}
	}
	changeFile(){
		console.log('here');
			this.upload.current.click();
	}
	onChangeFile(event) {
    event.stopPropagation();
    event.preventDefault();
    this.setState({image: URL.createObjectURL(event.target.files[0])});
	}
	render () {
		return (
			<Card className="card">
				<input id={this.props.id} type="file" ref={this.upload} style={{display: 'none'}} onChange={this.onChangeFile.bind(this)}/>
				<CardActionArea className="image-area" onClick={this.changeFile}>
					<img src={this.state.image} className="card-img"/>
				</CardActionArea>
			</Card>
		);
	}
}

export default ImageCard;
