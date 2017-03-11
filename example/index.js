import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactDropdown from '../dist/index.js';

class App extends Component {
  onTabSelected(tab) {
    console.log('Tab Selected', tab);
  }
  render() {

    let opts = {
      width: 500,
      height: 75,
      tabs: [
        { name: 'SELECT SIZE', bgColor: '#4EBABA', isTitle: true },
        { name: 'EXTRA SMALL', bgColor: '#4EBABA' }, 
        { name: 'SMALL', bgColor: '#4EBABA' }, 
        { name: 'MEDIUM', bgColor: '#4EBABA', isSelected: true }, 
        { name: 'LARGE', bgColor: '#4EBABA' },
        { name: 'EXTRA LARGE', bgColor: '#4EBABA' },
      ],
      translate: true
    };
    
    return (
      <div className='ex-container'>
        <nav></nav>
        <ReactDropdown opts={opts} onTabSelected={this.onTabSelected} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
