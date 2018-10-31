import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import M from 'materialize-css';

class Fixed extends Component {

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
			<div className="fixed">
				<div className="profile-two">
					<img src="./images/ivan-pic.jpg" alt="Ivan Saldano"/>
					<div className="text-box">
						<p className="profile-two-title">IVAN SALDANO</p>
						<p className="profile-two-content">SOFTWARE ENGINEER</p>
					</div>
					<div className="links-two">
						<ul>
							<li><a className="tooltipped" data-position="bottom" data-tooltip="github" href="https://github.com/ivanms1" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon size='2x' icon={faGithub}/></a></li>
							<li><a className="tooltipped" data-position="bottom" data-tooltip="linkedin" href="https://www.linkedin.com/in/ivansaldano/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon size='2x' icon={faLinkedin}/></a></li>
							<li><a className="tooltipped" data-position="bottom" data-tooltip="email" href="/"><FontAwesomeIcon onClick={this.copyEmail} size='2x' icon={faEnvelope}/></a></li>
							<li><a className="tooltipped" data-position="bottom" data-tooltip="resume" href="./ivan-resume.pdf" download><FontAwesomeIcon size='2x' icon={faAddressCard}/></a></li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}


export default Fixed;