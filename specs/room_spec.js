const assert = require('assert');
const Room = require('../room.js');
const Paint = require('../paint.js');
const Decorator = require('../decorator.js');

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

describe('Decorator', function() {
  let decorator;
  let paint;

  beforeEach(function() {
    decorator = new Decorator();
    paint1 = new Paint(2);
    paint2 = new Paint(3);
    paint3 = new Paint(5);
    room1 = new Room(10);
  });

  it('should start with an empty paint stock', function(){
    assert.deepStrictEqual(decorator.stock, []);
  });

  it('should be able to add a paint to stock', function(){
    decorator.addPaintToStock(paint1.litres);
    assert.deepStrictEqual(decorator.stock, [2]);
  });

  it('should be able to calculate the total number of litres in stock', function(){
    decorator.addPaintToStock(paint1.litres);
    decorator.addPaintToStock(paint2.litres);
    assert.equal(decorator.findTotal(), 5);
  });

  it('should be able to calculate if can paint room', function() {
    decorator.addPaintToStock(paint1.litres);
    decorator.addPaintToStock(paint2.litres);
    decorator.addPaintToStock(paint3.litres);
    assert.equal(decorator.canPaintRoom(room1),true)

  });

  it("should be able to calculate if can't paint room", function() {
    decorator.addPaintToStock(paint1.litres);
    decorator.addPaintToStock(paint2.litres);
    assert.equal(decorator.canPaintRoom(room1),false)

  });

  it("should be able to paint room if enough paint", function(){
    decorator.addPaintToStock(paint1.litres);
    decorator.addPaintToStock(paint2.litres);
    decorator.addPaintToStock(paint3.litres);
    decorator.addPaintToStock(paint1.litres);
    decorator.paintRoom(room1);
    assert.equal(room1.painted,true);
  });

});
