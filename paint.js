const Paint = function(litres){
  this.litres = litres;
}

Paint.prototype.checkEmpty = function(){
  if (this.litres === 0){
    return true;
  }
  else{
    return false;
  };
};

Paint.prototype.paintWall = function(area){
  this.litres -= area
};



module.exports = Paint;
