//const http = require('http')  //https://nodejs.org/dist/latest-v18.x/docs/api/synopsis.html
import { get, createServer } from "http";

const HOST = 'localhost'
const PORT = 5000

const server = createServer((req, res) => {
    res.end('Oi, estou funcionando com nodemon!')
})

get('/teste', (req, res) => {
    return 'Teste'
})

server.listen(PORT, HOST, () => {
    console.log(`Servidor Rodando: http://${HOST}:${PORT}/`);
})