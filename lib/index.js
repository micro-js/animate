/**
 * Modules
 */

var elapsed = require('@f/elapsed-time')
var tween = require('@f/tween')
var raf = require('@f/raf')

/**
 * Constants
 */

var fps60 = 1000 / 60

/**
 * Expose animate
 */

module.exports = animate

/**
 * animate
 */

function animate (start, end, render, duration, easing) {
  var tick = tween(start, end, duration, easing, fps60)
  var time = elapsed()

  var id = raf(function ticker () {
    var frame = tick(time() / fps60)
    render(frame)

    if (frame !== end) {
      id = raf(ticker)
    }
  })

  return function () {
    raf.cancel(id)
  }
}
