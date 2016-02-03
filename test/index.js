/**
 * Imports
 */

var animate = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  t.plan(1)

  var n = 0
  animate({width: 10}, {width: 100}, function (frame) {
    if (n === 0) {
      t.ok(frame.width <= 11)
      t.end()
    }

    n++
  })
})
