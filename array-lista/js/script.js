//array
const frigor = 
['banana', 
'mela', 
'pera', 
'ciliegia', 
'arancia', 
'mandarino', 
'cocomero', 
'limone', 
'fragola'];

//metto la pesca in frigor
const pesca = 'pesca';
frigor.push(pesca);

//booleano cocomero
let cocomero = false;
const stampa = document.getElementById('stampa')

//inizio ciclo + stampo se l'ho trovato o no
for (let i = 0; i < frigor.length; i++) {
    if (frigor[i] === 'cocomero') {
        cocomero = true;
        
    }
}
if (cocomero) {
    stampa.innerHTML = 'Trovato! Devo solo preparare il cocktail.';
} else {
    stampa.innerHTML = 'Oh no, devo uscire a comprare il cocomero!';
}