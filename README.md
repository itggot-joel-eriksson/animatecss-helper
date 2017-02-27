# animate.css-helper

## What is this?
A simple promise-based JavaScript helper for [Daniel Eden's](https://github.com/daneden) [Animate.css](https://github.com/daneden/animate.css). By including a small script you can animate certain DOM elements from JavaScript.
The script will add two classes; `animated` and the specified animation's name, when the animation is done these two classes will be removed from DOM elements to not cause a pain in the backside.

## Installing
```bash
$ git clone https://github.com/itggot-joel-eriksson/animatecss-helper
```
It also works with bower:
```bash
$ bower install itggot-joel-eriksson/animatecss-helper
```

## Usage
### Including it in your project
Include animate.css
```html
<link rel="stylesheet" href="animate.css" type="text/css">
```
Include the script
```html
<script src="animatecss-helper.js" type="application/javascript"></script>
```

### Add animation to a DOM element
```js
document.querySelector("#demo").animateCss("tada").then(function(element) {
	console.log("Done animating", element);
});
```

### Add animation to multiple DOM elements
```js
document.querySelectorAll(".demo").animateCss("tada").then(function(elements) {
	console.log("Done animating", elements);
});
```

## License
[MIT](LICENSE) &copy; [Joel Eriksson](https://github.com/itggot-joel-eriksson)
