import React, { Component } from 'react';
import Alert from './ui-components/Alert';

class App extends Component {
  constructor() {
    super();

    this.state = {
      showAlert: true
    };
  }

  render() {
    return (
      <div className="container">
        <Alert type="success" show={this.state.showAlert}>
          <h4 className="alert-heading">Caption</h4>
        </Alert>
      </div>
    );
  }
}

export default App;
