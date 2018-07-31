import React, { Component } from 'react';
import Alert, { DismissableComponent, AnimatedComponent } from './ui-components/Alert';

class App extends Component {
  constructor() {
    super();

    this.state = {
      showAlert: true
    };

    this.toggleAlert = this.toggleAlert.bind(this);
  }

  toggleAlert() {
    this.setState({
      showAlert: !this.state.showAlert
    });
  }

  render() {
    return (
      <div className="container">
        <Alert type="success" toggleAlert={this.toggleAlert} show={this.state.showAlert}>
          <h4 className="alert-heading">Caption</h4>
        </Alert>
        <DismissableComponent type="danger" toggleAlert={this.toggleAlert} show={this.state.showAlert} message="Hello guys" />
        <AnimatedComponent type="primary" toggleAlert={this.toggleAlert} show={this.state.showAlert} message="Animated" />
      </div>
    );
  }
}

export default App;
