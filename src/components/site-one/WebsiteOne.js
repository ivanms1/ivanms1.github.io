import React, { Component } from 'react';

import LandingPageOne from './LandingPageOne.js';
import WhoAmIOne from './WhoAmIOne.js';
import Portfolio from './PortfolioOne.js';
import SkillsOne from './SkillsOne';
import ContactOne from './ContactOne';
import FooterOne from './FooterOne';

import '../../website-one.css';

class WebsiteOne extends Component {
	render() {
		return (
			<div className="website-one">
				<LandingPageOne/>
				<WhoAmIOne/>
				<Portfolio/>
				<SkillsOne/>
				<ContactOne changePage={this.props.changePage}/>
				<FooterOne/>
			</div>
		);
	}
}

export default WebsiteOne
