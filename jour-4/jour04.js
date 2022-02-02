// 01 - object

let cat = {
    name:'garfield',
    age: 3,
    isCute: true,
};
console.log(cat);
console.log(cat['age']);
if (cat.isCute) {
    console.log('so cute !')
}

// 02 - combine

let cat2 = {
    name:'exel',
    age:2,
    isCute: true,
};

let cats = [cat,cat2];


// 03 - even 

function checkIfEven(num) {
 if (num % 2 === 0) {
    console.log('even');
 }else {
    console.log('odd');
 }
}

let numbers = [0,6,8,99];

for (let i=0;i < numbers.length; i++) {
    console.log('number testé -->', numbers[i]);
    checkIfEven(numbers[i]);
}

//04 - compare

function compare(num1,num2) {
    if(num1 > num2) {
        console.log('Num 1 is bigger');
        console.log(num1, 'is bigger than', num2);
    } else if(num1 < num2) {
        console.log('Num2 is bigger');
        console.log(num2, 'is bigger than',num1);
    } else  if(num1===num2) {
        console.log('Both ar the same');
        console.log()
    }
}

compare(12, 10);
compare(1, 10);
compare(10, 10);

// 05 - add up 


function addUp(num) {
    var sum = 0;

    for (var i = 1; i <= num; i++) {
        sum += i;
    }

    return sum;
}

var result = addUp(12);
console.log(result);
addUp(12);

// 06 - time


function format(num) {
    // 124 secondes => 2m et 4s
    // je sais que 1m = 60s
    /*
    console.log(Math.floor(num / 3600)); // heures
    console.log(num % 3600) // minutes et les secondes
    console.log(Math.floor(num % 3600 / 60));
    console.log(num % 3600 % 60);
    */

    var hours = Math.floor(num / 3600);
    var restHours = num % 3600;
    var minutes = Math.floor(restHours / 60);
    var secondes = restHours % 60;
    console.log(`${hours} : ${minutes} : ${secondes}`);
}

function formatWithoutMaths(num) {
    var days = 0;
    var hours = 0;
    var minutes = 0;
    var seconds = 0;
    for (var i = 0; i < num; i++) {
        seconds++;
        if (seconds === 60) {
            minutes++;
            seconds = 0;
        }
        if (minutes === 60) {
            hours++;
            minutes = 0;
        }
        if (hours === 24) {
            days++;
            hours = 0;
        }
    }
    console.log(`${hours} : ${minutes} : ${seconds}`);
}

function mehdiFormat(num) {
    var hours = Math.floor(num / 3600);
    var rest = num - hours * 3600;
    var minutes = Math.floor(rest / 60);
    var seconds = rest - minutes * 60;
    console.log(`${hours} : ${minutes} : ${seconds}`);
}

format(3700);
formatWithoutMaths(3700);
mehdiFormat(3700);