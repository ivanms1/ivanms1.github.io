import React, { Component } from 'react';

import Project from './Project.js';
import websites from './websites.json';

class PortfolioOne extends Component {
	state = {
		urls: websites
	}
	render() {
		return (
			<div className="page">
				<p className="portfolio-title">Portfolio</p>
				<div className="portfolio-grid">
					{
						this.state.urls.map(url => <Project link={url.link} url={url.url} name={url.name} key={url.url}/>)
					}
				</div>
			</div>
		);
	}
}

export default PortfolioOne