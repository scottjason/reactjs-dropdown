# reactjs-dropdown

A dropdown component for react.
```js
npm install reactjs-dropdown --save
```
then:
```js
import ReactDropdown from 'reactjs-dropdown';
```
or
```js
var ReactDropdown = require('reactjs-dropdown').defaut;
```
<br>
### This component uses CSS3 transforms for animation and requires a bit of setup, specifically on the z-index: 

Since we're not animating the height of the dropdown and are instead using transforms, the z-index property of the surrounding containers must be set appropriatly. Anything above the dropdown should have a higher z-index property to ensure the dropdown is hidden when it slides up (not showing). Additionaly, elements below the dropdown should have a lower z-index.

## Example

Let's say you had three rows with the dropdown component in the middle:

```html
<div className='row one'></div>
<div className='row two'>
  <ReactDropdown opts={opts} onTabSelected={this.onTabSelected} />
</div>
<div className='row three'></div>
```

Your css should look something like:

```css
.row {
  position: relative;
  width: 100%;
  height: 300px;
}
  
.row.one {
   z-index: 3;
 }
 
.row.two {
   z-index: 2 /* container holding the dropdown */
 }
 
.row.three {
   z-index: 1;
 } 
```


<br>
Takes an options object and an `onTabSelected` callback:

```js
  const opts = {
    width: 500, // width of tabs
    height: 75, // height of tabs
    tabs: [
    { name: 'SELECT SIZE', bgColor: '#4EBABA', isCtrl: true },
    { name: 'EXTRA SMALL', bgColor: '#4EBABA' }, 
    { name: 'SMALL', bgColor: '#4EBABA' }, 
    { name: 'MEDIUM', bgColor: '#4EBABA', isSelected: true }, 
    { name: 'LARGE', bgColor: '#4EBABA' },
    { name: 'EXTRA LARGE', bgColor: '#4EBABA' },
    ],
  };
```

One `isCtrl` and one `isSelected` key are required. `isSelected` lets the dropdown know which tab it should start on, while `isCtrl` determines the controller tab which is the tab at the top of the dropdown. You can also pass in different tab background colors for a gradient-like effect.

## Installation

```npm install reactjs-dropdown --save```

## Contributors
* Scott Jason

## License

MIT