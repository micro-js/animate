
# animate

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Animate properties using requestAnimationFrame and a custom render function

## Installation

    $ npm install @f/animate

## Usage

```js
var animate = require('@f/animate')
var applyStyles = require('@f/apply-styles')

animate({width: 10}, {width: 100}, props => applyStyles(element, props))
```

## API

### animate(start, end, render, duration, easing)

- `start` - The initial value of the properties you want to animate
- `end` - The final value of the properties you want to animate
- `render` - A function that receives `render(props, t)` where `props` is the interpolated properties, and `t` is the frame number.
- `duration` - The duration in milliseconds. Defaults to 350ms.
- `easing` - An easing function that accepts a frame number and interpolates it along an easing curve.

**Returns:** A `stop` function. Call it if you want to cancel an in-flight animation.

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/animate.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/animate
[git-image]: https://img.shields.io/github/tag/micro-js/animate.svg
[git-url]: https://github.com/micro-js/animate
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/animate.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/animate
