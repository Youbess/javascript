// 01 - hello world

console.log('helloworld !');

// 02- string 

let test ;
test = "My name is alex";
console.log(test);

// 03 - concaténation

let name ;
name = 'alex';
console.log('nice to meet you' + ' ' + name);

// 04 - string length

let testLength = "I'm very long !";
console.log( testLength.length);

// 05 - replace


let food ;
food = 'croissant is meh';
food = food.replace('meh','good');
console.log(food);

// 06 - up and down

let basic;
basic = 'This is Cool';

let basicUp;
basicUp = 'This is Cool';
basicUp = basic.toUpperCase();

let basicDown;
basicDown = 'This is Cool';
basicDown = basic.toLowerCase();
console.log(basic , basicUp , basicDown);

// 07 -  split

let word;
word = 'banana';
let words = word.split('');
console.log(words);

// 08 - template


let age;
age = 38;
console.log(`I'm ${age}`);



