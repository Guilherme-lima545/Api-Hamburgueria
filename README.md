# 🛠️ REST API — Node.js + MySQL

API RESTful desenvolvida com **Node.js** e **MySQL**, com operações completas de CRUD.

---

## 📋 Índice

- [Tecnologias](#-tecnologias)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação](#-instalação)
- [Configuração](#-configuração)
- [Rodando o projeto](#-rodando-o-projeto)
- [Endpoints](#-endpoints)
- [Estrutura de pastas](#-estrutura-de-pastas)
- [Licença](#-licença)

---

## 🚀 Tecnologias

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MySQL](https://www.mysql.com/)
- [dotenv](https://github.com/motdotla/dotenv)

---

## ✅ Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (v18 ou superior)
- [MySQL](https://www.mysql.com/) (v8 ou superior)
- [Git](https://git-scm.com/)

---

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/Guilherme-lima545/Api-Hamburgueria.git

# Acesse a pasta do projeto
cd Api-Hamburgueria

# Instale as dependências
npm install
```

---

## ⚙️ Configuração

Crie um arquivo `.env` na raiz do projeto com base no `.env.example`:

```env
PORT=3000

DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=nome_do_banco
```

> ⚠️ Nunca suba o arquivo `.env` para o repositório. Ele já está no `.gitignore`.

---

## ▶️ Rodando o projeto

```bash
# Modo desenvolvimento (com hot reload)
npm run dev

# Modo produção
npm start
```

O servidor estará disponível em: `http://localhost:3000`

---

## 📡 Endpoints

Base URL: `/api/produtos`

| Método | Rota                           |             Descrição             |
|--------|--------------------------------|-----------------------------------|
| GET    | `/api/produtos`                | Lista todos os produtos           |
| GET    | `/api/produtos/:id`            | Retorna um produto por ID         |
| GET    | `/api/produtos/categoria/:cat` | Retorna um produto por categoria  |
| POST   | `/api/produtos`                | Cria um novo produto              |
| PUT    | `/api/produtos/:id`            | Atualiza um produto por ID        |
| DELETE | `/api/produtos/:id`            | Remove um produto por ID          |

### Exemplos de requisição

**POST** `/api/produtos`
```json
{
  "nome": "Hambúrguer Artesanal",
  "preco": 29.90,
  "descricao": "Pão brioche, carne 180g, queijo cheddar"
}
```

**Resposta 201:**
```json
{
  "id": 1,
  "nome": "Hambúrguer Artesanal",
  "preco": 29.90,
  "descricao": "Pão brioche, carne 180g, queijo cheddar"
}
```

---

## 📁 Estrutura de pastas

```
├── src/
│   ├── app.js
│   ├── controllers/
│   │   ├── produtosController.js
│   │   └── ordersController.js
│   ├── routes/
│   │   ├── produtos.js
│   │   └── orders.js
│   └── db/
│       └── connection.js
├── database.sql
```

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Desenvolvido por [Guilherme Alves](https://github.com/Guilherme-lima545)
