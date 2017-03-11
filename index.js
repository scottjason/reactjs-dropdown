import React, { Component } from 'react';
import Prefixer from 'inline-style-prefixer';

const prefixer = new Prefixer();
const styles = prefixer.prefix({
  rdWrap: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 0,
    width: 'auto',
    height: 'auto'
  },
  rdInner: {
    position: 'relative',
    margin: 0,
    padding: 0,
    blackfaceVisibility: 'hidden',
    transform: 'translate3d(0,0,0)',
    transition: 'all .4s ease'
  },
  rdCtrl: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    listStyle: 'none',
    textAlign: 'center',
    color: 'white',
    fontSize: 24,
    borderBottom: '1px solid white',
    cursor: 'pointer',
    userSelect: 'none',
    zIndex: 100
  },
  rdTab: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    listStyle: 'none',
    textAlign: 'center',
    color: 'white',
    fontSize: 24,
    borderBottom: '1px solid white',
    cursor: 'pointer',
    userSelect: 'none'    
  },
  rdArrow: {
    position: 'absolute',
    top: 0,
    bottom: 4,
    right: 0,
    width: 12,
    height: 12,
    margin: 'auto',
    marginRight: 20,
    borderTop: '2px solid white',
    borderRight: '2px solid white',
    transform: 'rotate(135deg)',
    transition: 'all .4s ease'
  },
  rotate: {
    transform: 'rotate(320deg)'
  }
});

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
    this.state.dropdownHeight = this.extractHeight(this.state.opts);
  }
  extractHeight(o) {
    return o.height * o.tabs.length;
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
    const rotate = this.state.isOpen ? styles.rotate : null;

    return (  
      <div style={Object.assign({ backgroundColor: opts.bgColor }, styles.rdWrap)}>
        {opts.tabs.filter(this.isTitle).map((tab, i)=> {
           return <div onClick={this.onSelectTab.bind(this, tab)}
                key={i}
                className='rd-ctrl'
                style={Object.assign({ width: opts.width, height: opts.height, backgroundColor: tab.bgColor }, styles.rdCtrl)}>
            {tab.name}
            <div style={Object.assign({}, styles.rdArrow, rotate )}></div>
           </div>
          })} 
          <ul style={Object.assign({}, styles.rdInner, { transform: `translate(0px, ${y}px)` })}>
          {opts.tabs.filter(this.isNotTitle).map((tab, i)=> {
            return <li 
              onClick={this.onSelectTab.bind(this, tab)}
              key={i}
              className='rd-tab'
              style={Object.assign({ width: opts.width, height: opts.height, backgroundColor: tab.bgColor }, styles.rdTab)}>
                {tab.name}
              </li>;
          })}
         </ul>
      </div>
    )
  }
}

export default ReactDropdown;
