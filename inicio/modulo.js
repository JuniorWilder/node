// A função require() importa módulos (funçoes ou atributos) que podem ser utilizadas no codigo
var os = require('os') //https://nodejs.org/api/os.html
var fs = require('fs') //https://nodejs.org/api/fs.html
var path = require('fs') //https://nodejs.org/api/path.html

console.log('----- modulo: OS -----\n');

console.log('SO:', os.platform());
console.log('Arquitetura:', os.arch());
console.log('Hostname:', os.hostname() + '\n');

console.log('----- modulo: OS -----\n');

console.log('----- modulo: FS -----\n');
//Renomea um arquivo
// fs.rename('teste.js', 'teste_novo.js', (err) => {
//     if(err) {
//         console.log(err);
//     }
// })

// fs.readFile('teste_novo.js', (err, data) => {
//     if(err) throw err;
//     console.log(`Conteudo do arquivo:\n ${data}`);
//     })


// Metodo sincrono, ou seja, espera terminar para depois para
const data = fs.readFileSync('teste_novo.js').toString()
console.log(data);

console.log('----- modulo: FS -----\n');

console.log('----- modulo: PATH -----\n');
    
//console.log('Path', path.basename('modulo.js'));

console.log('----- modulo: PATH -----\n');

console.log(fs.mkdirSync('inicio'));

