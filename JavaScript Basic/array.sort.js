// filter, find,reduce, map
// array.sort

// syntax array.sort(fucntion(a, b) {}) -> retunr a sorted array
// if sort function
//    returns a value < 0
//      a will come before b
//    returns a value > 0
//      a will come after b
//    returns 0
//      a and b will stay unchanged

var numbers = [2, 9, 3, 4, 1]
// [1, 2, 3, 4, 9] // ascending order
var ascendingNumbers = numbers.sort(function(a, b){
  // assume: a = 1, b = 4
  return a - b;
});
console.log(ascendingNumbers);

// [ 9, 4, 3, 2, 1] // descending order
var descendingNumbers = numbers.sort(function(a, b){
  // assume: a = 3, b = 4
  // expect: a comes after b
  return b - a;
});
console.log(descendingNumbers);

var employees = [
  { name: 'Huy', age: 18},
  { name: 'Bo', age: 18},
  { name: 'Thay', age: 18},
  { name: 'Phuoc', age: 19}
];
var sortedEmployees = employees.sort(function(a, b){
  // a = employees[1], b = employees[2]
  // expect: a comes after b
  return b.age - a.age;
});
console.log(sortedEmployees);
