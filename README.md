Projeto: 
- API de de Gerenciamento de Contatos e Categorias

Descrição:
- Este projeto é uma API de gerenciamento de contatos e categorias desenvolvida em Node.js. A API permite listar, buscar, criar, atualizar e deletar contatos e categorias. Agora, com integração ao banco de dados, a API também inclui validação para garantir que os nomes de categorias sejam únicos.

Tecnologias Utilizadas:
- Node.js
- Express
- JavaScript
- UUID (para geração de IDs únicos)
- PostgreSQL (Banco de dados)


O servidor rodará na porta 3000: 
- Acesse: http://localhost:3000

Endpoints Disponíveis:

Para Contatos:

- Listar todos os usuários
  1 GET '/users'
    QUERY PARAMS opcionais:
      'order=asc' → Ordena por ID crescente (padrão)
      'order=desc' → Ordena por ID decrescente
  
- Buscar um contato por ID:
  2 GET '/users/:id'
    Caso o ID não exista:
      { "error": "Contact not found" }

- Deletar um contato pelo ID:
  3 DELETE '/contacts/:id'
  
- Criar um contato novo:
  4 POST '/contacts'
  
- Atualizar um contato já existente:
  5 PUT '/contacts/:id'

  Para Categorias:

  Categorias
- Listar todas as categorias
1 GET /categories

- Buscar uma categoria por ID
2 GET /categories/:id

- Criar uma nova categoria
3 POST /categories

- Atualizar uma categoria existente
4 PUT /categories/:id

- Deletar uma categoria por ID
5 DELETE /categories/:id

