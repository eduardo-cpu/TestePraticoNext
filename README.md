# Next.js App Example

Este é um projeto Next.js que demonstra várias funcionalidades e práticas recomendadas para desenvolvimento web moderno, incluindo roteamento, consumo de APIs externas, páginas estáticas, sistema de autenticação e middlewares.

## Funcionalidades

- **Roteamento com Next.js App Router**
  - Páginas estáticas
  - Rotas dinâmicas com parâmetros
  - Consumo de APIs externas

- **Autenticação**
  - Sistema de login simples com NextAuth.js
  - Proteção de rotas via middleware
  - Dashboard personalizado para usuários autenticados

- **Consumo de APIs Externas**
  - JSONPlaceholder API - Exibição de posts
  - Wikipedia API - Busca de artigos

- **Otimização de Performance**
  - Implementação de cache para requisições à API
  - Lazy loading de componentes

- **Estilização**
  - Tailwind CSS para estilização responsiva

## Pré-requisitos

- Node.js 18.0.0 ou superior
- npm ou yarn

## Instalação

1. Clone o repositório:
```bash
git clone https://github.com/eduardo-cpu/TestePraticoNext
cd next-app-example
```

2. Instale as dependências:
```bash
npm install
# ou
yarn
```

3. Configure as variáveis de ambiente:
Crie um arquivo `.env.local` na raiz do projeto e adicione:
```
NEXTAUTH_SECRET=sua_chave_secreta_aqui  utilize esse comando para criar uma chave secreta (openssl rand -hex 32)
NEXTAUTH_URL=http://localhost:3000
```

## Executando o projeto

### Desenvolvimento

```bash
npm run dev
# ou
yarn dev
```

O servidor de desenvolvimento será iniciado em [http://localhost:3000](http://localhost:3000).

### Build para produção

```bash
npm run build
# ou
yarn build
```

### Iniciar versão de produção

```bash
npm start
# ou
yarn start
```

## Estrutura do Projeto

```
app/
  ├── api/           # Rotas de API
  │    └── auth/     # Autenticação com NextAuth
  ├── dashboard/     # Dashboard protegido
  ├── estatico/      # Página estática de exemplo
  ├── login/         # Página de login
  ├── posts/         # Página dinâmica com parâmetro slug
  └── api-wikipedia/ # Página que consome a API da Wikipedia
components/          # Componentes reutilizáveis
lib/                 # Funções de utilitário e APIs
public/              # Arquivos estáticos
utils/               # Utilitários (cache, etc)
```

## Credenciais de Teste

O sistema utiliza autenticação com credenciais mockadas para demonstração:

1. Usuário Admin:
   - Email: admin@example.com
   - Senha: senha123

2. Usuário Normal:
   - Email: user@example.com
   - Senha: senha123

## Tecnologias Utilizadas

- [Next.js](https://nextjs.org/) - Framework React
- [NextAuth.js](https://next-auth.js.org/) - Autenticação
- [Tailwind CSS](https://tailwindcss.com/) - Estilização
- [Node-cache](https://www.npmjs.com/package/node-cache) - Sistema de cache

## APIs Externas

- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) - API de posts para demonstração
- [Wikipedia API](https://www.mediawiki.org/wiki/API:Main_page) - API para busca de artigos

## Recursos Adicionais

- Middleware para proteção de rotas e logging
- Sistema de cache para otimização de requisições
- Layout responsivo com Tailwind CSS

---

Projeto desenvolvido como teste prático de Next.js.