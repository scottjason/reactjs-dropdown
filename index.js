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
  }
  sum(a, v) {
    return a + v;
  } 
  extractHeight(o) {
    return o.height;
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
  toggleDropdown() {
    this.setState({ isOpen: !this.state.isOpen });
  }
  toggleSelected(tabSelected) {
    return (tab)=> {
      tab.isSelected = tab.name === tabSelected.name ? true : false;
      return tab;
    }
  }
  onSelectTab(tab) {
    let { tabs } = this.state.opts;
    this.state.opts.tabs = tabs.map(this.toggleSelected(tab));
    this.toggleDropdown();
    if (!tab.isTitle) {
      this.props.onTabSelected.call(this, tab);
    }
  }
  render() {

    const { opts } = this.state;
    const y = this.state.isOpen ? 0 : -this.state.dropdownHeight;
    const dropdownStyle = { transform: `translate(0px, ${y}px)` };
    const caretStyle = this.state.isOpen ? 'rd-arrow rotate' : 'rd-arrow';
    
    return (  
      <div className='rd-wrap'
           style={{ backgroundColor: opts.bgColor }}>
          {opts.tabs.filter(this.isTitle).map((tab, i)=> {
           return <div className='tab-title'
                onClick={this.onSelectTab.bind(this, tab)}
                key={i}
                style={{ width: tab.width, height: tab.height, backgroundColor: tab.bgColor }}>
            {tab.name}
            <div className={caretStyle}></div>
           </div>
          })}      
          <ul id='react-dropdown' 
              className='rd-tab-container open'
              style={dropdownStyle}
              >
          {opts.tabs.filter(this.isNotTitle).map((tab, i)=> {
            return <li 
              className='rd-tab'
              onClick={this.onSelectTab.bind(this, tab)}
              key={i}
              style={{ width: tab.width, height: tab.height, backgroundColor: tab.bgColor }}>
                {tab.name}
              </li>;
          })}
         </ul>
      </div>
    )
  }
}

export default ReactDropdown;
