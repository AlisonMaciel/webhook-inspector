# 🪝 WebHook Inspector

> Uma aplicação Full-Stack para capturar, inspecionar e gerenciar requisições de webhooks em tempo real.

![Node.js](https://img.shields.io/badge/Node.js-20+-339933?logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-19.1-61DAFB?logo=react&logoColor=black)
![Fastify](https://img.shields.io/badge/Fastify-5.6-000000?logo=fastify&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15+-4169E1?logo=postgresql&logoColor=white)

## 📋 Descrição do Projeto

O **WebHook Inspector** é uma ferramenta completa para desenvolvimento e debugging de webhooks. Ele permite que você capture, visualize e analise requisições HTTP de webhooks enviados por serviços terceiros, facilitando o desenvolvimento e a integração de APIs.

### ✨ Características Principais

- 🎯 **Captura de Webhooks**: Receba e armazene requisições webhook de qualquer serviço
- 📊 **Inspeção Detalhada**: Visualize método HTTP, headers, query params, body e mais
- 🔍 **API Documentada**: Documentação interativa com Scalar/Swagger
- 🗄️ **Armazenamento Persistente**: Banco de dados PostgreSQL com Drizzle ORM
- ⚡ **Performance**: Backend construído com Fastify para alta performance
- 🎨 **Interface Moderna**: Frontend React com Vite para desenvolvimento rápido
- 🔒 **Type-Safe**: TypeScript em todo o stack com validação Zod

## 🏗️ Arquitetura

Este é um monorepo organizado com workspaces:

```
node-react/
├── api/          # Backend - API Fastify
├── web/          # Frontend - React + Vite
└── package.json  # Gerenciamento do workspace
```

## 🛠️ Tecnologias Utilizadas

### Backend (API)
- **[Fastify](https://fastify.dev/)** - Framework web de alta performance
- **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática
- **[Drizzle ORM](https://orm.drizzle.team/)** - ORM type-safe para PostgreSQL
- **[Zod](https://zod.dev/)** - Validação e schema de dados
- **[PostgreSQL](https://www.postgresql.org/)** - Banco de dados relacional
- **[@scalar/fastify-api-reference](https://github.com/scalar/scalar)** - Documentação interativa da API
- **[Biome](https://biomejs.dev/)** - Linter e formatter

### Frontend (Web)
- **[React 19](https://react.dev/)** - Biblioteca UI
- **[Vite](https://vitejs.dev/)** - Build tool e dev server
- **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática
- **[ESLint](https://eslint.org/)** - Linter para código limpo

### Ferramentas de Desenvolvimento
- **[pnpm](https://pnpm.io/)** - Gerenciador de pacotes rápido e eficiente
- **[tsx](https://github.com/privatenumber/tsx)** - Executor TypeScript para desenvolvimento
- **[drizzle-kit](https://orm.drizzle.team/kit-docs/overview)** - CLI para migrations

## 📦 Instalação

### Pré-requisitos

- Node.js 20 ou superior
- pnpm 8 ou superior
- PostgreSQL 15 ou superior

### Passo a Passo

1. **Clone o repositório**
```bash
git clone <url-do-repositorio>
cd node-react
```

2. **Instale as dependências**
```bash
pnpm install
```

3. **Configure as variáveis de ambiente**

Crie um arquivo `.env` na pasta `api/`:

```env
PORT=3333
DATABASE_URL=postgresql://usuario:senha@localhost:5432/webhook_inspector
```

4. **Execute as migrations do banco de dados**
```bash
cd api
pnpm db:generate
pnpm db:migrate
```

5. **Inicie os servidores de desenvolvimento**

Em terminais separados:

```bash
# Terminal 1 - API
cd api
pnpm dev

# Terminal 2 - Web
cd web
pnpm dev
```

A API estará disponível em `http://localhost:3333` e o frontend em `http://localhost:5173`.

## 🚀 Como Usar

### Acessando a Documentação da API

Após iniciar o servidor da API, acesse:

```
http://localhost:3333/docs
```

Você terá acesso à documentação interativa onde pode testar todos os endpoints.

### Endpoints Disponíveis

#### Listar Webhooks

```http
GET /api/webhooks?limit=20
```

**Query Parameters:**
- `limit` (opcional): Número de webhooks a retornar (1-100, padrão: 20)

**Resposta:**
```json
[
  {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "method": "POST"
  }
]
```

### Estrutura do Banco de Dados

A tabela `webhooks` armazena:

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | UUID v7 | Identificador único |
| method | Text | Método HTTP (GET, POST, etc) |
| pathname | Text | Caminho da URL |
| ip | Text | Endereço IP do requisitante |
| statusCode | Integer | Código de status HTTP |
| contentType | Text | Tipo de conteúdo |
| contentLenght | Integer | Tamanho do conteúdo |
| queryParams | JSONB | Parâmetros de query |
| body | Text | Corpo da requisição |
| createdAt | Timestamp | Data de criação |

## 💻 Exemplos de Código

### Criando uma Nova Rota na API

```typescript api/src/routes/create-webhook.ts
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { db } from '../db'
import { webhooks } from '../db/schema/webhooks'

export const createWebhook: FastifyPluginAsyncZod = async (app) => {
  app.post(
    '/api/webhooks',
    {
      schema: {
        summary: 'Create a new webhook entry',
        tags: ['Webhooks'],
        body: z.object({
          method: z.string(),
          pathname: z.string(),
          ip: z.string(),
        }),
        response: {
          201: z.object({
            id: z.string(),
            method: z.string(),
          })
        }
      }
    },
    async (request, reply) => {
      const { method, pathname, ip } = request.body

      const [webhook] = await db.insert(webhooks).values({
        method,
        pathname,
        ip,
        queryParams: {},
      }).returning()

      return reply.status(201).send(webhook)
    }
  )
}
```

### Registrando a Rota no Servidor

```typescript api/src/server.ts
import { createWebhook } from './routes/create-webhook'

// ... outras configurações

app.register(listWebhooks)
app.register(createWebhook) // Adicione aqui
```

### Consumindo a API no Frontend

```typescript web/src/hooks/useWebhooks.ts
import { useEffect, useState } from 'react'

interface Webhook {
  id: string
  method: string
}

export function useWebhooks(limit = 20) {
  const [webhooks, setWebhooks] = useState<Webhook[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchWebhooks() {
      try {
        const response = await fetch(
          `http://localhost:3333/api/webhooks?limit=${limit}`
        )
        const data = await response.json()
        setWebhooks(data)
      } catch (error) {
        console.error('Error fetching webhooks:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchWebhooks()
  }, [limit])

  return { webhooks, loading }
}
```

### Componente React para Listar Webhooks

```typescript web/src/components/WebhookList.tsx
import { useWebhooks } from '../hooks/useWebhooks'

export function WebhookList() {
  const { webhooks, loading } = useWebhooks()

  if (loading) {
    return <div>Carregando...</div>
  }

  return (
    <div>
      <h2>Webhooks Recebidos</h2>
      <ul>
        {webhooks.map((webhook) => (
          <li key={webhook.id}>
            <strong>{webhook.method}</strong> - {webhook.id}
          </li>
        ))}
      </ul>
    </div>
  )
}
```

## 📝 Scripts Disponíveis

### Workspace Root
```bash
pnpm install      # Instala todas as dependências
```

### API
```bash
pnpm dev          # Inicia o servidor em modo desenvolvimento
pnpm start        # Inicia o servidor em modo produção
pnpm db:generate  # Gera migrations do Drizzle
pnpm db:migrate   # Executa migrations
pnpm db:studio    # Abre o Drizzle Studio (GUI do banco)
pnpm format       # Formata o código com Biome
```

### Web
```bash
pnpm dev          # Inicia o dev server do Vite
pnpm build        # Compila para produção
pnpm preview      # Preview da build de produção
pnpm lint         # Executa o linter
```

## 🗄️ Gerenciamento do Banco de Dados

### Criar uma Nova Migration

```bash
cd api
pnpm db:generate
```

### Visualizar o Banco com Drizzle Studio

```bash
cd api
pnpm db:studio
```

Acesse `https://local.drizzle.studio` para gerenciar seus dados visualmente.

## 🔧 Configuração CORS

A API está configurada para aceitar requisições de qualquer origem em desenvolvimento. Para produção, configure adequadamente em `api/src/server.ts`:

```typescript
app.register(fastifyCors, {
  origin: ['https://seu-dominio.com'],
  methods: ['GET', 'POST', 'DELETE', 'PATCH', 'PUT', 'OPTIONS'],
  credentials: true
})
```

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commitar suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Fazer push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

## 📄 Licença

Este projeto está sob a licença ISC.

## 👥 Autores

Desenvolvido com ❤️ por Alison Betini.

---

**⭐ Se este projeto foi útil, considere dar uma estrela!**
