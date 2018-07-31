import React from 'react';
import propTypes from 'prop-types';

class Alert extends React.Component {
	render() {
		return (
			<div className={`alert alert-${this.props.type}`} role="alert">
			  {this.props.message ? this.props.message : this.props.children}
			</div>
		);
	}
}

Alert.propTypes = {
	type: propTypes.string.isRequired,
	message: propTypes.string
};

Alert.defaultProps = {
	message: null
};

export default Alert;