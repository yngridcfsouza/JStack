// O Controller serve para armazenar a regra de negócio da aplicação
// Utilizando as regras do CRUD (Create, Read, Update e Delete 

const users = require('../mocks/users');

module.exports = {
    listUsers(request, response) {
        response.writeHead(200, {
            'Content-Type': 'application/json' });
        response.end(JSON.stringify(users));
    },
};