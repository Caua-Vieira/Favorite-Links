# 📌 Favorite Links API

API RESTful desenvolvida com Node.js e TypeScript para o gerenciamento de links favoritos. O projeto oferece um CRUD completo, permitindo criar, listar, atualizar e excluir registros de links, com integração ao banco de dados PostgreSQL via Docker.

---

## 🚀 Funcionalidades

- 🔗 Cadastrar novos links favoritos
- 📄 Listar todos os links cadastrados
- ✏️ Atualizar informações de um link
- 🗑️ Remover links existentes
- 📂 Organização por categorias

---

## 🧰 Tecnologias Utilizadas

- [Node.js]
- [TypeScript]
- [Express]
- [PostgreSQL]
- [Docker]
- [Swagger] para documentação da API

---

## 🐳 Subindo o Projeto com Docker

1. Renomeie o arquivo `.env.example` para `.env` e preencha com suas variáveis:
   
```env
POSTGRES_USER=seu_usuario
POSTGRES_PASSWORD=sua_senha
POSTGRES_DB=favorite_links_db
```

2. Execute o Docker:
```bash
docker compose up -d
```

## 📦 Instalação e execução

1. Execute
```bash
npm install
npm run dev
```

## 🗂️ Endpoints da API

Documentação Swagger:  

**Principais rotas:**
- GET /links → Lista todos os links
- POST /links → Cria um novo link
- PUT /links/:id → Atualiza um link existente
- DELETE /links/:id → Remove um link

## 📁 Estrutura do Projeto
```text
src/
├── controllers/
├── usecases/
├── repositories/
├── routes/
├── middlewares/
├── database/
├── utils/
└── config/
```
## ✍️ Autor

Feito por [Cauã Vieira](https://www.linkedin.com/in/cau%C3%A3-vieira/)
