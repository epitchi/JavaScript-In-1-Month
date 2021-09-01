// Date
// moment.js
var moment = require('moment');
var now = new Date();
var myBirthday = new Date(1990, 3, 26); // 26-03-2003

// number of milliseconds from 1-1-1970, +7
console.log(now.getTime());
console.log(myBirthday.getTime());

var now = moment('2021-07-12 08:00');
// console.log(now.fromNow());
console.log(now.format('YYYY/MM/DD'));
