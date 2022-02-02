// 01 - somme des carrés

let total = 0;
for (let i = 5; i <= 10;i++) {
    let carre = i*i;
    total = total+carre;
}

console.log(total);

// 02 - comptons

let tout = 0
for (let i=100; i <= 1000;i++) {
  if (i % 7 === 0) {
      tout = tout +1 // ou tout++
  }
}

console.log(tout);

// 03 - chanceux

let min = 1;
let max = 6;
let lancer = 20;

let lancerTotal=0;

for (let i= 1; i <=20; i++) {
    let floor = Math.floor(Math.random()*(max-min+1)+min);
    if ( floor >=5) {
        lancerTotal = lancerTotal + floor;
    }
}

 console.log(lancerTotal);

// 04 - les boites