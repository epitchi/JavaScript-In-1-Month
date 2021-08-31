// Math object in JavaScript
// Math.PI
// Math.ceil(number) // ceiling: trần nhà (làm tròn lên)
// Math.floor(number) / floor: sàn nhà (làm tròn xuống)
// Math.round(number)
// Math.max(x1, x2, ...)
// Math.min(x1, x2, ...)
// Math.random()
// => Mozilla Math object
function discAre(r){
  return r * r * Math.PI;
}
var s = discAre(5);
console.log(s);

console.log(Math.ceil(9.2)); // 10
console.log(Math.floor(9.7)); // 9
console.log(Math.max(10, 20,  -1)); // 20
console.log(Math.min(10, 20,  -1)); // -1
console.log('Random: ', Math.random());
function tossACoin(){
  var random = Math.random();
  return random > 0.5;
}
console.log('Mặt sấp: ', tossACoin());
