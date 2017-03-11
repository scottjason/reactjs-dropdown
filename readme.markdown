# reactjs-dropdown

A dropdown component for react. Uses CSS3 transforms for animation.

### This component uses CSS3 transforms for animation and requires a bit of setup: 

Create a container to hold the dropdown. Make sure the container's position property is set to `absolute`. Set the width of the container to a predefined value (ie `500px`) and set the height to `auto`. 

Then insert the ReactDropdown component, which takes an options object and an `onTabSelected` callback.


## Example

```css
.container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 500px;
  height: auto;
}

```

```js
  const opts = {
    width: 500, // width of tabs
    height: 75, // height of tabs
    tabs: [
    { name: 'SELECT SIZE', bgColor: '#4EBABA', isTitle: true },
    { name: 'EXTRA SMALL', bgColor: '#4EBABA' }, 
    { name: 'SMALL', bgColor: '#4EBABA' }, 
    { name: 'MEDIUM', bgColor: '#4EBABA', isSelected: true }, 
    { name: 'LARGE', bgColor: '#4EBABA' },
    { name: 'EXTRA LARGE', bgColor: '#4EBABA' },
    ],
  };
```

One `isSelected` and one `isTitle` key are required. `isSelected` lets the dropdown know which tab it should start on, while `isTitle` determines which tab should be at the top of the dropdown (the controller). You can also pass in different tab background colors for a gradient-like effect.

## Installation

```npm install reactjs-dropdown --save```

## Contributors
* Scott Jason

## License

MIT