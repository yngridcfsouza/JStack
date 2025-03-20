Projeto: 
- API de Lista de Contatos

Descrição:
- Este projeto é uma API de gerenciamento de contatos desenvolvida em Node.js. A API permite listar todos os contatos e buscar um contato específico.

Tecnologias Utilizadas:
- Node.js
- Express
- JavaScript
- UUID (para geração de IDs únicos)


O servidor rodará na porta 3000: 
- Acesse: http://localhost:3000

Endpoints Disponíveis:

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
