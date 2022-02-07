
// 01
// const countiesNames = require('request');

// countiesNames.get(
//     "https://restcountries.com/v3.1/name/japan", 
//     function(err, res, body) {
//         const japan = JSON.parse(body);
//         const currenciesSymbol = japan[0].currencies
// 		console.log(currenciesSymbol);
// 	});
    

// 02

// const chuckNorris= require('request');

// chuckNorris.get(
//     'https://api.chucknorris.io/jokes/random',
//     function(err,res,body){
//         const chuckNorrisJoke = JSON.parse(body);
// console.log(chuckNorrisJoke.value);
//     });

// 03
function getPokemon(number) {
    const catchPokemon = require ('request')
catchPokemon.get (
    'https://pokeapi.co/api/v2/pokemon?limit=100&offset=200',
    function(err,res,body){
        const pokemonList  = JSON.parse(body);

var test= number;
console.log(pokemonList.results[test].name);
    });
}

getPokemon(5)


