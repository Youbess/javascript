// 01 - array

//let fruits = ['mango','lemon','blueberry'];
//console.log(fruits);

// 02 - access

//let ingredients = ['eggs','milk','butter'];
//console.log(ingredients[1]);

// 03 - add and remove

//let objets = ['pen','book','lamp'];
//objets.push('chair');
//console.log(objets);
//objets.splice(2,1);
//console.log(objets);
//objets.push('laptop');
//console.log(objets);
//objets.splice(2,1);
//console.log(objets);

// 04 - order

//let numbers = [4,10,8,12,6];
//numbers.reverse();
//console.log(numbers);
//numbers.sort((a,b) => a- b);
//console.log(numbers);

// 05 - boucle

//let total = 0;
//let limit = 10;
//for (let i = 0; i <=limit; i++) {
//   total += i ;
//  console.log("total partiel:",total);
//}
// console.log(total);

// 06 - Reverse
var sentence = "Hello Konexio !";
var myArray = sentence.split("");

// console.table(myArray);

var result = [];

for (var i = 0; i < myArray.length; i++) {
    var item = myArray[i];
    
    // console.log("item", item);

    result.unshift(item);
}

// console.table(result);

console.log(result.join(""));