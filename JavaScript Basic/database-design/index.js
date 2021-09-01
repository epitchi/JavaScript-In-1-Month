// database desgin
var classes = [
  {
    id: 0, // indentifier
    name: '1A',
    teacher: 0,
  },
  {
    id: 1,
    name: '2A',
    teacher: 1
  },
  {
    id: 2,
    name: '3A',
    teacher: 2
  },
  {
    id: 3,
    name: '4A',
    teacher: 3
  },
  {
    id: 4,
    name: '5A',
    teacher: 4
  },
];
var teachers = [
   {
    id: 0,
    name: 'Lay',
    age: 18
  },
  {
    id: 1,
    name: 'Phuoc',
    age: 19
  },
  {
    id: 2,
    name: 'Huy',
    age: 18
  },
  {
    id: 3,
    name: 'Bo',
    age: 18
  },
  {
    id: 4,
    name: 'Thien',
    age: 18
  },
];
var students = [
  {id: 0, name: 'Thien', height: 120, class: 0},
  {id: 1, name: 'Phuoc', height: 90, class: 0},
  {id: 2, name: 'Huy', height: 190, class: 0},
  {id: 3, name: 'Bo', height: 190, class: 1},

];

function getStudentsInClass(className) {
  var classObject = classes.find(function(x){
    return x.name === className;
  });

  var studentsInClass = students.filter(function(student){
    return student.class === classObject.id;
  });

  return studentsInClass;
}
var studentsInClass = getStudentsInClass('2A');
console.log(studentsInClass);
