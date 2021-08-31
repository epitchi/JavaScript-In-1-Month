// `new` keyword
//var today = new Date();
// Create a new object, object literal
var mouse = {
  weight: 0.2,
  getWeight: function(){
    return this.weight;
  }
};
// console.log(mouse.getWeight());
// constructor function
function Mouse(color, weight){
  this.type = 'mouse';
  this.color = color;
  this.weight = weight;
}
var mouse1 = new Mouse('white', 0.2);
var mouse2 = new Mouse('black', 0.5);
console.log(mouse1);
console.log(mouse2);
