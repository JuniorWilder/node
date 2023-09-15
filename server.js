const http = require('http')  //https://nodejs.org/dist/latest-v18.x/docs/api/synopsis.html

const HOST = 'localhost'
const PORT = 5000

const server = http.createServer((req, res) => {
    res.end('Oi, estou funcionando com nodemon!')
})

server.listen(PORT, HOST, () => {
    console.log(`Servidor Rodando: http://${HOST}:${PORT}/`);
})