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

  animate({width: 10}, {width: 100}, function (frame, tick) {
    if (tick === 0) {
      t.deepEqual(frame, {width: 10})
      t.end()
    }
  })
})
