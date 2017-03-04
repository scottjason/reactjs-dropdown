import React, { Component } from 'react';
import styles from './main.css';

class ReactDropdown extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isOpen: false,
      opts: {}
    }
  }
  componentWillMount() {
    Object.assign(this.state.opts, this.props.opts);
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
    if (this.state.isOpen) {
      this.state.opts.tabs = tabs.map(this.toggleSelected(tab));
    } else {
      this.state.opts.tabs = tabs.map(this.viewAll);
    }
    this.state.isOpen = !this.state.isOpen;
    this.setState(this.state);
  }
  viewAll(tab) {
    tab.isSelected = true;
    return tab;
  }  
  render() {

    let { opts } = this.state;

    return (
      <div className='rd-wrap'
           style={{ backgroundColor: opts.bgColor }}>
         <ul className='rd-tab-container'>
          {opts.tabs.filter(this.bySelected).map((tab, i)=> {
            return <li 
              className='rd-tab'
              onClick={this.onSelectTab.bind(this, tab)}
              key={i}
              style={{ width: opts.tabWidth, height: opts.tabHeight, backgroundColor: opts.bgColor }}>
                {tab.name}
              </li>;
          })}
         </ul>
      </div>
    )
  }
}

export default ReactDropdown;
