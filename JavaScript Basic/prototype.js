// Prototype: Nguyên mẫu

// Prototype object is shared among all the object created using new

// Create a new object, boject literal
var mouse = {
  weight: 0.2,
  getWeight: function(){
    return this.weight;
  }
};
// constructor funciton
function Mouse(color, weight){
  this.type = 'mouse';
  this.color = color;
  this.weight = weight;
}

Mouse.prototype.sleep = function(){
  console.log(this.color + ' Sleeping...');
};

var jerry = new Mouse('orange', 20);
console.log(jerry); //Mouse { type: 'mouse', color: 'orange', weight: 20 }
console.log(jerry.sleep()); // Sleeping...
// console.log(Mouse.prototype.constructor === Mouse);

// best pratice
