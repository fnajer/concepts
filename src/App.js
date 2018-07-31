import React, { Component } from 'react';
import Alert from './ui-components/Alert';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Alert type="success" message="Hello, its my message!" />
        <Alert type="secondary" message="No, secondary message better!" />
      </div>
    );
  }
}

export default App;
