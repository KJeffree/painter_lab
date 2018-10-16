const Decorator = function() {
  this.stock = [];
}


Decorator.prototype.addPaintToStock = function(litres){
  this.stock.push(litres)
}

Decorator.prototype.findTotal = function () {
  total = 0
  for(var item of this.stock) {
    total += item;
  }
  return total;
}

Decorator.prototype.canPaintRoom = function(room){
  if (room.area <= this.findTotal()){
    return true;
  } else{
    return false;
  };

};

Decorator.prototype.paintRoom = function(room){
  if (this.canPaintRoom(room) === true){
    room.painted = true
  }
};

module.exports = Decorator;
