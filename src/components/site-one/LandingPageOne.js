import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import posed from 'react-pose';
import M from 'materialize-css';

const NavItem = posed.li({
  hoverable: true,
  init: { scale: 1 },
  hover: { scale: 1.1, transition: { type: 'spring', stiffness: 100 }}
});

const IntroBox = posed.div({
	open: { x: '0%',
			transition: { duration: 1000, ease: 'easeOut' }
		  },
	close: { x: '-200%'}
})

class LandingPageOne extends Component {

	componentDidMount(){
		document.addEventListener('DOMContentLoaded', function() {
	    let elems = document.querySelectorAll('.tooltipped');
	    M.Tooltip.init(elems, { enterDelay: 400});
  		});
	}

	copyEmail (e) {
		e.preventDefault() 
		let emailValue = "contact@ivansaldano.com";
		let email = document.createElement("input");
		document.body.appendChild(email);
		email.setAttribute("id", "emailId");
		document.getElementById("emailId").value=emailValue
		email.select();
		document.execCommand("copy");
		document.body.removeChild(email);
		M.toast({html: 'email copied!', classes: 'toast'})
	}
	render() {
		return (
			<div className="landing-page-one">
				<IntroBox className="intro-box z-depth-5 hoverable" initialPose="close" pose="open">
					<img src="./images/ivan-pic.jpg" alt="Ivan Saldano"/>
					<p className="title">IVAN SALDANO</p>
					<p className="position">SOFTWARE ENGINEER</p>
					<div className="links">
						<ul>
							<NavItem><a className="tooltipped" data-position="bottom" data-tooltip="github" href="https://github.com/ivanms1" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon size='3x' icon={faGithub}/></a></NavItem>
							<NavItem><a className="tooltipped" data-position="bottom" data-tooltip="linkedin" href="https://www.linkedin.com/in/ivansaldano/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon size='3x' icon={faLinkedin}/></a></NavItem>
							<NavItem><a className="tooltipped" data-position="bottom" data-tooltip="email" href="/"><FontAwesomeIcon onClick={this.copyEmail} size='3x' icon={faEnvelope}/></a></NavItem>
							<NavItem><a className="tooltipped" data-position="bottom" data-tooltip="resume" href="./ivan-resume.pdf" download><FontAwesomeIcon size='3x' icon={faAddressCard}/></a></NavItem>
						</ul>
					</div>					
				</IntroBox>
			</div>
		);
	}
}

export default LandingPageOne