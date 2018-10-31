import React, { Component } from 'react';
import fire from '../../firebase';
import M from 'materialize-css';

class ContactOne extends Component {
	state = {
		name: '',
		email: '',
		message: ''
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
			<div className="page row">
				<p className="contact-title-one">Contact Me</p>
				<div className="contact-box col s12">
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
					        		   required
					        		   className="validate"/>
					        	<label htmlFor="email">Email</label>
					        </div>
						</div>
						<div className="row">
							<div className="input-field col s12 m12 center-align">
					        	<textarea id="message"
					        			  name="message"
					        			  value={message}
					        		   	  onChange={this.handleChange}
					        		   	  required
					        			  className="materialize-textarea"></textarea>
					        	<label htmlFor="message">Message</label>
					        </div>
						</div>
				        <div className="row">
				        	<button className="btn waves-effect waves-light grey darken-1 col s12 m2" type="submit" name="action">
				        		Submit<i className="material-icons right">send</i>
				        	</button>
				        </div>
					</form>
					<div className="col s12 m4 center-align valign-wrapper change-style">
						<p>Don't like this design?</p>
						<button type="submit" onClick={this.props.changePage} className="btn waves-effect waves-light grey darken-1">Change design</button>
					</div>
				</div>
			</div>
		);
	}
}

export default ContactOne