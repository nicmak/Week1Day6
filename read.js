var fs = require('fs');

console.log("Hi");

fs.readFile('test.txt', function(error, data) {
  console.log("Congrats: " + data);
});

console.log("GoodBye Again");