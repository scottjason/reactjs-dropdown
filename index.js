import React, { Component } from 'react';
import styles from './main.css';

class ReactDropdown extends Component {
  constructor (props) {
    super(props);
    this.state = {
      opts: {},
      isOpen: false,
      dropdownHeight: 0
    }
  }
  componentWillMount() {
    Object.assign(this.state.opts, this.props.opts);
    let tabs = this.state.opts.tabs;
    this.state.dropdownHeight = tabs.map(this.extractHeight).reduce(this.sum);
    // this.state.dropdownHeight = tabs.map(this.extractHeight).reduce(this.sum);
  }
  extractHeight(o) {
    return o.height;
  }
  sum(a, v) {
    return a + v;
  }
  selectAll(tab) {
    tab.isSelected = true;
    return tab;
  }  
  bySelected(tab) {
    return tab.isSelected ? tab : null;
  }
  toggleSelected(tabSelected) {
    return (tab)=> {
      tab.isSelected = tab.name === tabSelected.name ? true : false;
      return tab;
    }
  }
  onSelectTab(tab) {
    let { tabs } = this.state.opts;
    this.toggle();
  }
  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }
  isTitle(tab) {
    if (tab.isTitle) {
      return tab;
    }
  }
  isNotTitle(tab) {
    if (!tab.isTitle) {
      return tab;
    }
  }
  render() {

    let { opts } = this.state;
    let dropdownStyle = this.state.isOpen ? 'rd-tab-container open' : 'rd-tab-container';    
    const x = 0;
    const y = this.state.isOpen ? 0 : -this.state.dropdownHeight;
    const transform = { 
        transform: `translate(${x}px, ${y}px)` 
    };
    
    return (  
      <div className='rd-wrap'
           style={{ backgroundColor: opts.bgColor }}>
          {opts.tabs.filter(this.isTitle).map((tab, i)=> {
           return <div className='tab-title'
                onClick={this.onSelectTab.bind(this, tab)}
                key={i}
                style={{ width: tab.width, height: tab.height, backgroundColor: tab.bgColor }}>
            {tab.name}
           </div>
          })}      
          <ul id='react-dropdown' 
              className={dropdownStyle}
              style={transform}
              >
          {opts.tabs.filter(this.isNotTitle).map((tab, i)=> {
            return <li 
              className='rd-tab'
              onClick={this.onSelectTab.bind(this, tab)}
              key={i}
              style={{ width: tab.width, height: tab.height, backgroundColor: tab.bgColor ? tab.bgColor : 'orange' }}>
                {tab.name}
              </li>;
          })}
         </ul>
      </div>
    )
  }
}

export default ReactDropdown;
