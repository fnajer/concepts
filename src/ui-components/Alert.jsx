import React from 'react';
import propTypes from 'prop-types';

class Alert extends React.Component {
	render() {
		return (
			<div>
				{
					this.props.show &&
					<div className={`alert alert-${this.props.type}`} role="alert">
					  {this.props.message ? this.props.message : this.props.children}
					</div>
				}
			</div>
		);
	}
}

Alert.propTypes = {
	type: propTypes.string.isRequired,
	message: propTypes.string,
	show: propTypes.bool
};

Alert.defaultProps = {
	message: null,
	show: true
};

export default Alert;