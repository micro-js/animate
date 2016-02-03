/**
 * Modules
 */

var tween = require('@f/tween')
var raf = require('@f/raf')

/**
 * Expose animate
 */

module.exports = animate

/**
 * animate
 */

 function animate (start, end, render, duration, easing) {
   var tick = tween(start, end, duration, easing)
   var t = 0

   var id = raf(function ticker () {
     var frame = tick(t)
     render(frame, t)

     if (frame !== end) {
       t++
       id = raf(ticker)
     }
   })

   return function () {
     raf.cancel(id)
   }
 }
