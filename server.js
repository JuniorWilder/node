//const http = require('http')  //https://nodejs.org/dist/latest-v18.x/docs/api/synopsis.html

import http from "http";

const HOST = 'localhost'
const PORT = 5000

const server = http.createServer((req, res) => {
    
    console.log(req.method);

    if(req.method === 'GET') {
        if(req.url === '/usuarios'){
            res.writeHead(200, {'Content-type': 'text/plain'})
            res.end('Entrou no /usuarios')
        } else {
            res.end('Oi, estou funcionando com nodemon!')
        }
    } 

    
})



server.listen(PORT, HOST, () => {
    console.log(`Servidor Rodando: http://${HOST}:${PORT}/`);
})