import React, { Component } from 'react';
import Alert from './ui-components/Alert';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Alert type="success">
          <h4 className="alert-heading">Caption</h4>
        </Alert>
        <Alert type="secondary" message="Hello, its my message!">
        </Alert>
      </div>
    );
  }
}

export default App;
