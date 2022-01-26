// 01 - number

let integer = 102;
let float = 13.9;
console.log(integer +'\n'+ float);

// 02 - convert

let basic = 34;
let stringified = basic.toString();
console.log(stringified);

// 03 - round

let num = 1.5;
let rounded = Math.round(1.5);
console.log(rounded);

// 04 - arithmétique 

let test = 12;
let bis = 5;
console.log(test + bis);
console.log(test+=bis);

// 05 - comparaison

let test1 = 143;
let bis1 = 219;
console.log(test1<bis1);

// 06 - condition

let limit = 50;
let score = 64;
if (score >= limit ) {
console.log('ok good !');
} else {
    console.log('oh nooo...');
}

// 07 - condition 2

let password = 'azerty';
if (password.length > 5) {
    console.log('the password is secure');
}

// 08 - condition 3

if (password.length>5 && score>=limit) {
    console.log('everything is good');
} else if (password.length>5 || score>=limit)  {
    console.log("Something is good");
} else {
    console.log('Nothing is good')
}