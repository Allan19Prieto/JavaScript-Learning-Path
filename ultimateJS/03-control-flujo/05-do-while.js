//  Números pares

let i = 2;
console.log('Ciclo while');
while (i < 2) {
    if (i%2 == 0){
        console.log('Número par: ' + i);
    }
    i++;
}

console.log('');

console.log('Ciclo do-while');
let j = 2;
do {
    if (j%2 == 0){
        console.log('Número par: ' + j);
    }
    j++;
} while (j<2)