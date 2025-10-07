# 🌍 CoutripsGo - Backend API

> **API REST completa para exploração de países e destinos turísticos**

**CoutripsGo Backend** é uma API robusta e moderna desenvolvida para fornecer dados completos sobre países, curiosidades e pontos turísticos, alimentando aplicações de viagem e turismo.

## 🚀 Funcionalidades

- ✨ **API RESTful**: Endpoints bem estruturados e documentados
- 🌐 **Gerenciamento de Países**: CRUD completo para países
- 🏛️ **Pontos Turísticos**: Sistema de atrações turísticas por país
- 🔍 **Curiosidades**: Dados interessantes sobre cada destino
- 📊 **Banco de Dados**: Integração com SQLite via Prisma ORM
- 🔄 **CORS Habilitado**: Suporte para requisições de diferentes origens
- ⚡ **Performance**: Consultas otimizadas com relacionamentos

## 🛠️ Tecnologias

- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **Prisma ORM** - Object-Relational Mapping
- **SQLite** - Banco de dados
- **CORS** - Cross-Origin Resource Sharing
- **dotenv** - Gerenciamento de variáveis de ambiente

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

### Para o Backend (Este Repositório)
- **Node.js** (versão 18.0 ou superior) - [Download](https://nodejs.org/)
- **npm** (incluído com Node.js)
- **Git** - [Download](https://git-scm.com/)

### Verificar Instalações
```bash
# Verificar versão do Node.js
node --version

# Verificar versão do npm
npm --version

# Verificar versão do Git
git --version
```

## 🚀 Instalação e Configuração

### 1. Clone o Repositório

```bash
# Clone o repositório
git clone https://github.com/sophiabalico/CoutripsGo.git

# Entre no diretório do projeto
cd CoutripsGo
```

### 2. Instale as Dependências

```bash
# Instalar dependências
npm install
```

### 3. Configure as Variáveis de Ambiente

```bash
# Copie o arquivo de exemplo
cp .env.example .env
```

Edite o arquivo `.env` com suas configurações:

```env
PORT=5000
DATABASE_URL="file:./CoutripsGo.db"
```

### 4. Configure o Banco de Dados

```bash
# Executar migrações do Prisma
npx prisma migrate dev
```

### 5. Inicie o Servidor

```bash
# Modo desenvolvimento
npm run dev
```

O servidor estará rodando em: **http://localhost:5000**

### 📋 Status do Serviço

| Serviço | URL | Porta | Status |
|---------|-----|-------|--------|
| **API Backend** | http://localhost:5000 | 5000 | ✅ Ativo |

## 📁 Estrutura do Projeto

```
CoutripsGo/
├── prisma/
│   ├── schema.prisma              # Schema do banco de dados
│   ├── CoutripsGo.db              # Arquivo SQLite
│   └── migrations/                # Histórico de migrações
├── src/
│   ├── controllers/               # Lógica de controle
│   │   ├── countryController.js   # Controller de países
│   │   ├── curiosityController.js # Controller de curiosidades
│   │   └── touristSpotController.js # Controller de pontos turísticos
│   ├── models/                    # Modelos de dados
│   │   ├── countryModel.js        # Modelo de países
│   │   ├── curiosityModel.js      # Modelo de curiosidades
│   │   └── touristSpotModel.js    # Modelo de pontos turísticos
│   ├── routes/                    # Definição de rotas
│   │   ├── countryRoutes.js       # Rotas de países
│   │   ├── curiosityRoutes.js     # Rotas de curiosidades
│   │   ├── touristSpotRoutes.js   # Rotas de pontos turísticos
│   │   └── index.routes.js        # Agregador de rotas
│   └── server.js                  # Servidor principal
├── package.json                   # Dependências e scripts
└── .env.example                   # Exemplo de variáveis de ambiente
```

## 🌐 Endpoints da API

### 🏳️ Países

| Método | Endpoint | Descrição | Parâmetros |
|--------|----------|-----------|------------|
| `GET` | `/country` | Lista todos os países | - |
| `GET` | `/country/:id` | Busca país por ID | `id` (number) |
| `POST` | `/country` | Cria novo país | Body JSON |
| `PUT` | `/country/:id` | Atualiza país | `id` (number) + Body JSON |
| `DELETE` | `/country/:id` | Remove país | `id` (number) |

#### Exemplo de Requisição - Criar País
```json
POST /country
{
  "name": "Brasil",
  "imageUrl": "https://example.com/brasil.jpg",
  "capital": "Brasília",
  "language": "Português",
  "coin": "Real (BRL)",
  "cost": "Moderado",
  "flag": "🇧🇷",
  "location": "América do Sul"
}
```

### 🎭 Curiosidades

| Método | Endpoint | Descrição | Parâmetros |
|--------|----------|-----------|------------|
| `GET` | `/curiosidades` | Lista todas as curiosidades | - |
| `GET` | `/curiosidades/:id` | Busca curiosidade por ID | `id` (number) |
| `POST` | `/curiosidades` | Cria nova curiosidade | Body JSON |
| `PUT` | `/curiosidades/:id` | Atualiza curiosidade | `id` (number) + Body JSON |
| `DELETE` | `/curiosidades/:id` | Remove curiosidade | `id` (number) |

### 🏛️ Pontos Turísticos

| Método | Endpoint | Descrição | Parâmetros |
|--------|----------|-----------|------------|
| `GET` | `/turismos` | Lista todos os pontos turísticos | - |
| `GET` | `/turismos/:id` | Busca ponto turístico por ID | `id` (number) |
| `POST` | `/turismos` | Cria novo ponto turístico | Body JSON |
| `PUT` | `/turismos/:id` | Atualiza ponto turístico | `id` (number) + Body JSON |
| `DELETE` | `/turismos/:id` | Remove ponto turístico | `id` (number) |

## 🗄️ Modelo de Dados

### Country (Países)
```javascript
{
  id: number,
  name: string,
  imageUrl: string?,
  capital: string,
  language: string,
  coin: string?,
  cost: string?,
  flag: string,
  location: string?,
  curiosities: Curiosity[],
  tourists: TouristSpot[]
}
```

### Curiosity (Curiosidades)
```javascript
{
  id: number,
  title: string,
  description: string?,
  countryId: number,
  country: Country
}
```

### TouristSpot (Pontos Turísticos)
```javascript
{
  id: number,
  imageUrl: string,
  title: string,
  description: string?,
  countryId: number,
  country: Country
}
```

## 🚦 Status de Resposta

| Código | Descrição |
|--------|-----------|
| `200` | Sucesso |
| `201` | Criado com sucesso |
| `400` | Requisição inválida |
| `404` | Recurso não encontrado |
| `500` | Erro interno do servidor |

## 🔗 Frontend

Esta API foi desenvolvida para trabalhar em conjunto com o frontend:
- **Frontend Repository**: [CoutripsGo-front](https://github.com/sophiabalico/CoutripsGo-front)
- **Frontend URL**: http://localhost:3000

## 👥 Autora

- **Sophia Balico** - [@sophiabalico](https://github.com/sophiabalico)

---

**⭐ Se este projeto te ajudou, considere dar uma estrela no repositório!**