var fs = require('fs');
function readFilePromise(path){
  return new Promise(function(resolve, reject){
    fs.readFile(path, {encoding: 'utf8'}, function(err, data){
      if(err){
        reject(err);
      } else {
        resolve(data);
      }
    })
  })

  fs.readFile(path, {encoding: 'utf8'}, function(err, data){

  });
}
// readFilePromise('song1.txt')
//   .then(function(song1){
//     console.log(song1);
//     return readFilePromise('song2.txt');
//   })
//   .then(function(song2){
//     console.log(song2);
//     return readFilePromise('song3.txt');
//   })
//   .then(function(song3){
//     console.log(song3);
//   })
//   .catch(function(error){
//     console.log(error);
//   });

  Promise.all([
    readFilePromise('song1.txt'),
    readFilePromise('song2.txt'),
    readFilePromise('song3.txt'),
  ]).then(function(values){
    console.log(values);
  }).catch(function(error){
    console.log(error);
  });
