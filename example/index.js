import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactDropdown from '../index.js';

class App extends Component {
  render() {
    return (
      <ReactDropdown />
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
