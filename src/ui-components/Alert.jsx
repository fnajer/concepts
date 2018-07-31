import React from 'react';
import propTypes from 'prop-types';

class Alert extends React.Component {
	render() {
		return (
			<div>
				{
					this.props.show &&
					<div onClick={this.props.toggleAlert} className={`alert alert-${this.props.type}`} role="alert">
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
	show: propTypes.bool,
	toggleAlert: propTypes.func
};

Alert.defaultProps = {
	message: null,
	show: true,
	toggleAlert: function() {}
};

// Design pattern "Higher order component" includes:
// function
// takes component
// return enhanced component

const withAnimation = (Component) => {
	const AnimatedComponent = (props) => {
		return (
			<div className="wow bounceInUp">
				<Component {...props} />
			</div>
		);
	};

	return AnimatedComponent;
};

const withDismiss = (Component) => {
	class DismissableComponent extends React.Component {
		componentDidMount() {
			setTimeout(() => { 
				this.props.toggleAlert();
			}, 2000);
		}
		render() {
			return <Component {...this.props} />
		}
	}

	return DismissableComponent;
};

export const AnimatedComponent = withAnimation(Alert);
export const DismissableComponent = withDismiss(AnimatedComponent);

export default Alert;