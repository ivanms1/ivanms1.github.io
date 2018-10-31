import React, { Component } from 'react';
import M from 'materialize-css';

import fire from '../../firebase';

class Intro extends Component {

	state = {
		name: '',
		email: '',
		message: ''
	}

	componentDidMount() {
		let elems = document.querySelectorAll('.modal');
		M.Modal.init(elems, {});
	}

	itemsRef = fire.database().ref('messages');
	handleSubmit = this.handleSubmit.bind(this);
	handleChange = this.handleChange.bind(this);

	handleChange(event) {
  		const target = event.target;
  		const value = target.value;
  		const name = target.name;

  		this.setState({ [name]: value });
  	}

  	handleSubmit(event) {
		const {name, email, message } = this.state;
    	event.preventDefault();
	    this.itemsRef.push({
	    	name: name,
	    	email: email,
	    	message: message
	    });

	    M.toast({html: 'message sent!'})

	    this.setState({name: '', email: '', message: ''})
  	}

	render() {
		const { name, email, message } = this.state;
		return (
			<div className="intro-two">
				<div className="intro-two-box">
					<p className="intro-two-title">intuitive, fast, responsive and beautiful design.</p>
					<p className="content-two">My name is Ivan Saldano, born in Argentina and raised in Chile. I am a full stack web developer, specialized in the MERN stack. I am passionate about web development so I am always learning and expanding my stack and skills. I also have a strong work ethic and I guarantee quality work delivered on time. Let's work together and make great things!</p>
					<button data-target="contact" className="waves-effect waves-light hoverable btn grey lighten-1 modal-trigger">Hire Me</button>
				</div>
				<div id="contact" className="modal">
				    <div className="modal-content">
				      <form onSubmit={this.handleSubmit} className="contact-form col s12 m8">
						<div className="row">
							<div className="input-field col s12 m6">
					        	<input id="name" name="name"
					        		   type="text"
					        		   value={name}
					        		   onChange={this.handleChange}
					        		   required
					        		   className="validate"/>
					        	<label htmlFor="name">Name</label>
				        	</div>
				        	<div className="input-field col s12 m6">
					        	<input id="email"
					        		   name="email"
					        		   type="email"
					        		   value={email}
					        		   onChange={this.handleChange}
					        		   className="validate"
					        		   required/>
					        	<label htmlFor="email">Email</label>
					        </div>
						</div>
						<div className="row">
							<div className="input-field col s12 m12 center-align">
					        	<textarea id="message"
					        			  name="message"
					        			  value={message}
					        			  required
					        		   	  onChange={this.handleChange}
					        			  className="materialize-textarea"></textarea>
					        	<label htmlFor="message">Message</label>
					        </div>
						</div>
				        <div className="row">
				        	<button href="#!" className="btn waves-effect hoverable waves-light grey darken-1 col s12 m2 modal-close" type="submit" name="action">
				        		Submit<i className="material-icons right">send</i>
				        	</button>
				        </div>
					</form>
				    </div>
				</div>
			</div>
		);
	}
}

export default Intro