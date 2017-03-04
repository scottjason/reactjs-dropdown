import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactDropdown from '../index.js';

class App extends Component {
  render() {

    let opts = {
      tabWidth: 500,
      tabHeight: 75,
      tabs: [
        { name: 'EXTRA SMALL' }, 
        { name: 'SMALL' }, 
        { name: 'MEDIUM', isSelected: true }, 
        { name: 'LARGE' },
        { name: 'EXTRA LARGE' }
      ],
      bgColor: '#4EBABA'
    };
    
    return (
      <div className='container'>
        <ReactDropdown opts={opts} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
