const http = require('http');
const { URL } = require('url');

const routes = require('./routes');
const { Console } = require('console');

const server = http.createServer((request, response) => {
    // Diferenciar o ID de Query Params
    const parsedUrl = new URL(`http://localhost:3000${request.url}`);

    // criando o primeiro endpoint
    console.log(`Request method: ${request.method} | Endpoint: ${request.url}`);

    const route = routes.find((routeObj) => (
        routeObj.endpoint === request.url && routeObj.method === request.method
    ));

    if (route) {
        request.query = Object.fromEntries(parsedUrl.searchParams);
        route.handler(request, response);
    } else {
        response.writeHead(404, {
            'Content-Type': 'text/html' });
        response.end(`Cannot ${request.method} ${request.url}`);
    }
});

server.listen(3000, () => console.log('Server started at http://localhost:3000'));