import React, { Component } from 'react';

import '../../website-two.css';
import Fixed from './Fixed';
import Scroll from './Scroll';
import Footer from './Footer';

class WebsiteTwo extends Component {
	render() {
		return (
			<div className="website-two">
				<Fixed/>
				<Scroll changePage={this.props.changePage}/>
				<Footer/>
			</div>
		);
	}
}

export default WebsiteTwo
