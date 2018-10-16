const assert = require('assert');
const Room = require('../room.js');
const Paint = require('../paint.js');

describe('Room', function () {

  let room;

  beforeEach(function(){
    room = new Room(20)
  });

  it('should have an area', function() {
    assert.equal(room.area, 20)
  });

  it('should not be painted', function() {
    assert.equal(room.painted, false)
  });

  it('should be able to be painted', function(){
    room.paintRoom();
    assert.equal(room.painted, true)

  });

});

describe('Paint', function() {
  let paint;

  beforeEach(function(){
    paint = new Paint(2)
  });

  it('should have paint', function(){
    assert.equal(paint.litres, 2)
  });

  it('should check if empty', function(){
    assert.equal(paint.checkEmpty(), false)
  });
  it('should be able to empty itself', function(){
    paint.paintWall(1);
    assert.equal(paint.litres, 1)
  });

});
