import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

import WebsiteOne from './components/site-one/WebsiteOne';
import WebsiteTwo from './components/site-two/WebsiteTwo';

library.add(faTwitter)

class App extends Component {
	state = {
		pageOne: true
	}

	changePage = this.changePage.bind(this);

	changePage () {
		if(this.state.pageOne) {
			this.setState({ pageOne: false })
			window.scrollTo(0, 0);
		}

		else {
			this.setState({ pageOne: true })
			window.scrollTo(0, 0);
		}
	}
  render() {
  	const { pageOne } = this.state;
    return (
    	<BrowserRouter>
    		<div>
    			<Route exact path="/" render={() => (
    				pageOne ?
    				<WebsiteOne changePage={this.changePage}/> :
    				<WebsiteTwo changePage={this.changePage}/>
    			)}/>
    		</div>
    	</BrowserRouter>
    );
  }
}

export default App;
