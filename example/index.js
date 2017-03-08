import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactDropdown from '../index.js';

class App extends Component {
  render() {

    let opts = {
      tabs: [
        { name: 'SELECT SIZE', width: 500, height: 75, bgColor: '#4EBABA', isTitle: true },
        { name: 'EXTRA SMALL', width: 500, height: 75, bgColor: '#4EBABA' }, 
        { name: 'SMALL', width: 500, height: 75, bgColor: '#4EBABA' }, 
        { name: 'MEDIUM', width: 500, height: 75, bgColor: '#4EBABA', isSelected: true }, 
        { name: 'LARGE', width: 500, height: 75, bgColor: '#4EBABA' },
        { name: 'EXTRA LARGE', width: 500, height: 75, bgColor: '#4EBABA' },
      ],
      translate: true
    };
    
    return (
      <div className='container'>
        <ReactDropdown opts={opts} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
