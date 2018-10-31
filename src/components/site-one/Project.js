import React, { Component } from 'react';

class Project extends Component {
	render() {
		return (
			<div className="project">
				<a href={this.props.link} target="_blank" rel="noopener noreferrer"><img className="z-depth-1 responsive-img hoverable" src={this.props.url} alt="web project"/></a>
				<p className="center-align">{this.props.name}</p>
			</div>
		);
	}
}

export default Project
