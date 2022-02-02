// 01 - format

// function formatDate(date) {
    // console.log(date)
    // let chiffre = date.split('-');
    // chiffre.reverse();
    // console.log(chiffre);
    // let newDate = chiffre.join('/');
    // console.log(newDate);
    // return newDate
// }
// let formatedDate = formatDate('2022-02-22')

// console.log(formatedDate);

// 02 - age

function calculateAge(date){

let news = new Date();
let age = news.getFullYear()-date -1;

console.log(age);

}

calculateAge('1983');