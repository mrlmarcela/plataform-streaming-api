# Plataforma Streaming API

API para gerenciamento de playlists e itens de streaming, usando Fastify, Prisma e PostgreSQL com Docker.

## Pré-requisitos

- Docker e Docker Compose instalados

- Node.js (versão compatível com `tsx`)

- Yarn ou npm

## Configuração

1.  **Crie o arquivo `.env` na raiz do projeto** com a variável de conexão do banco:

```bash
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/playlists?schema=public"
```

## Comandos úteis

**Rodar o projeto:**

```bash
npm run start
```

Esse comando:

- Executa as migrations pendentes no banco (prisma migrate deploy)
- Sobe o banco e demais serviços do Docker em background (docker-compose up -d)
- Inicia o servidor Fastify com reload automático (tsx watch src/http/server.ts)

**Popular banco com os itens:**

```bash
npm run populate
```

**Execute os testes:**

```bash
npm run test
```
