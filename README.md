Projeto: 
API de Lista de Contatos

Descrição:
Este projeto é uma API de gerenciamento de contatos desenvolvida em Node.js. A API permite listar todos os contatos e buscar um contato específico.

Tecnologias Utilizadas (será atualizado):
Node.js
JavaScript

O servidor rodará na porta 3000: 
Acesse: http://localhost:3000

Endpoints Disponíveis (será atualizado):

Listar todos os usuários
1 GET '/users'
Parâmetros opcionais:
'order=asc' → Ordena por ID crescente (padrão)
'order=desc' → Ordena por ID decrescente

2 Buscar um contato por ID:
GET '/users/:id'

Caso o ID não exista:
{ "error": "Contact not found" }
