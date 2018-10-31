import React, { Component } from 'react';

import Project from './Project';
import websites from '../site-one/websites.json';

class Portfolio extends Component {
	state = {
		urls: websites
	}
	render() {
		return (
			<div className="page-two">
				<p className="title-two">Portfolio</p>
				<div className="portfolio-grid-two">
					{
						this.state.urls.map(url => <Project link={url.link} url={url.url} name={url.name} key={url.url}/>)
					}
				</div>
			</div>
		);
	}
}

export default Portfolio
