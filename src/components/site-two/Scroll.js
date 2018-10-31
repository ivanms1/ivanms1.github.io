import React, { Component } from 'react';

import Intro from './Intro';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Skills from './Skills';

class Scroll extends Component {
	render() {
		return (
			<div className="scroll">
				<Intro/>
				<Portfolio/>
				<Skills/>
				<Contact changePage={this.props.changePage}/>
			</div>
		);
	}
}

export default Scroll
