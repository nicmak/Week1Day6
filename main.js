/*var fs= require('fs');
var data='';

//create a readable stream

var readerStream = fs.createReadStream('test.txt');

//set the encoding to utf8
readerStream.setEncoding('UTF8');

//handle stream events --> Data, end, and error

readerStream.on('data', function(chunk) {
  data +=chunk;
});

readerStream.on('end', function() {
	console.log(data);
});

readerStream.on('error', function(err){
	console.log(err.stack);
});

console.log('Program Ended'); */

var fs = require("fs");
var data = 'How you doinagain';

// Create a writable stream
var writerStream = fs.createWriteStream('test.txt');

// Write the data to stream with encoding to be utf8
writerStream.write(data,'UTF8');

// Mark the end of file
writerStream.end();

// Handle stream events --> finish, and error
writerStream.on('finish', function() {
    console.log("Write completed.");
});

writerStream.on('error', function(err){
   console.log(err.stack);
});

console.log("Program Ended");









