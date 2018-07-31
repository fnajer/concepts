import React from 'react';

class Alert extends React.Component {
	render() {
		return (
			<div className={`alert alert-${this.props.type}`} role="alert">
			  {this.props.message ? this.props.message : this.props.children}
			</div>
		);
	}
}

export default Alert;