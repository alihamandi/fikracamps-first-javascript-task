/*let fs = require('fs');
let res1 = fs.readFileSync('flower.txt');
let array = load('flower.txt');
console.log(array);*/

  var fs = require('fs');
  var array = fs.readFileSync('flower.txt').toString().split('\n');

   
/*1*/    console.log('this is the count of the flowers');
    console.log(array.length);
/*2*/    console.log( 'these are the flowers that starts with -S-' )
for( let i=0 ; i < array.length ;i++){
  let x=array[i].startsWith("S");
  if (x === true) {
    console.log( array[i]);
  };
};
/*3*/    console.log( 'these are the number of flowers that not starts with S' )
  let y=0;
for( let i=0 ; i < array.length ;i++){
  let x=array[i].startsWith("S");
  if (x === false) {
    y=y+1;
  };
};
    console.log(y);
/*4*/    console.log( 'these are the flowers that starts with -A-' )
for( let i=0 ; i < array.length ;i++){
  let x=array[i].startsWith('A');
  if (x === true) {
    console.log( array[i]);
  };
};
/*5*/    console.log( 'these are the flowers that has only 5 letters' )
for( let i=0 ; i < array.length ;i++){
  let x=array[i].length;
  if (x == 5) {
    console.log( array[i]);
  };
};