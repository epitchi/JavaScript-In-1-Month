// JSON object
// 1. stringify - Convert an object to a JSON string
// 2. parse - Convert a JSON string to an object
var myDog = {name: "Huy nqu", age: 1, dead: false};
var myDogString = JSON.stringify(myDog)
// console.log(myDog);
// console.log(myDogString);,
var myCatString = '{"name": "Phuoc", "age": 2, "dead": true}';
var myCat = JSON.parse(myCatString);
console.log(myCat.name);
