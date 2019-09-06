const net = require('net');
const port = 8080;
const host = '127.0.0.1';
const everythingIsOK = `HTTP/1.1 200 LOL

Everything is OK
`;

const server = net.createServer();

server.on('connection', sock => {

    sock.on('data', data => {
        console.log(data.toString())
        sock.end(everythingIsOK)
    })
})

server.listen(port, host, () => {
    console.log('TCP Server is running on port ' + port +'.');
})
