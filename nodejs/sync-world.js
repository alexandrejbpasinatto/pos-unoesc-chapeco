var http = require('http');

var fs = require('fs');

console.log('Vou ler', Date.now());
console.time('Leitura');

var file = fs.readFileSync('file.mp3');

console.log(file);

console.timeEnd('leitura');
console.log('lido', Date.now());

