// Implementação de funções para consumo de APIs externas
import { getCache, setCache } from '../utils/cache';

// Lista de posts fictícios para uso com slugs textuais
export const mockPosts = [
  {
    id: 1,
    slug: 'introducao-nextjs',
    title: 'Introdução ao Next.js',
    body: 'O Next.js é um framework React para produção que torna fácil construir aplicações web rápidas.',
    content: `<p>O Next.js é um framework React para produção que torna fácil construir aplicações web rápidas.</p>
              <p>Ele oferece diversas funcionalidades como renderização híbrida, roteamento baseado em sistema de arquivos, suporte a TypeScript e otimização automática.</p>
              <p>Este é um exemplo de post dinâmico usando o slug <strong>introducao-nextjs</strong>.</p>`
  },
  {
    id: 2,
    slug: 'react-hooks',
    title: 'Entendendo React Hooks',
    body: 'React Hooks permitem que você use estado e outros recursos do React sem escrever uma classe.',
    content: `<p>React Hooks permitem que você use estado e outros recursos do React sem escrever uma classe.</p>
              <p>Os hooks mais comuns são useState, useEffect, useContext, useReducer, useCallback e useMemo.</p>
              <p>Este é um exemplo de post dinâmico usando o slug <strong>react-hooks</strong>.</p>`
  },
  {
    id: 3,
    slug: 'tailwind-css',
    title: 'Estilização com Tailwind CSS',
    body: 'Tailwind CSS é um framework CSS utilitário que permite criar designs personalizados sem sair do seu HTML.',
    content: `<p>Tailwind CSS é um framework CSS utilitário que permite criar designs personalizados sem sair do seu HTML.</p>
              <p>Diferente de frameworks como Bootstrap, o Tailwind não vem com componentes pré-definidos, mas oferece classes utilitárias de baixo nível.</p>
              <p>Este é um exemplo de post dinâmico usando o slug <strong>tailwind-css</strong>.</p>`
  },
  {
    id: 4,
    slug: 'api-routes-nextjs',
    title: 'API Routes no Next.js',
    body: 'Com o Next.js, você pode criar APIs facilmente utilizando API Routes.',
    content: `<p>Com o Next.js, você pode criar APIs facilmente utilizando API Routes.</p>
              <p>API Routes permitem que você crie endpoints de API como parte do seu aplicativo Next.js, colocando arquivos na pasta /pages/api.</p>
              <p>Este é um exemplo de post dinâmico usando o slug <strong>api-routes-nextjs</strong>.</p>`
  },
  {
    id: 5,
    slug: 'ssg-vs-ssr',
    title: 'SSG vs SSR no Next.js',
    body: 'Next.js permite escolher entre geração estática (SSG) e renderização do lado do servidor (SSR) para cada página.',
    content: `<p>Next.js permite escolher entre geração estática (SSG) e renderização do lado do servidor (SSR) para cada página.</p>
              <p>SSG gera HTML em tempo de build, enquanto SSR gera HTML a cada requisição, cada um com seus próprios casos de uso ideais.</p>
              <p>Este é um exemplo de post dinâmico usando o slug <strong>ssg-vs-ssr</strong>.</p>`
  },
];

// Função para buscar dados da API JSONPlaceholder
export async function fetchApiData() {
  const cacheKey = 'api-data';
  
  // Tenta buscar do cache primeiro
  const cachedData = getCache(cacheKey);
  if (cachedData) {
    console.log('Retornando dados do cache');
    return cachedData;
  }
  
  // Se não está no cache, busca da API
  console.log('Buscando dados da API');
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
  
  if (!res.ok) {
    throw new Error('Falha ao buscar dados da API');
  }
  
  const data = await res.json();
  
  // Salva no cache (por 5 minutos)
  setCache(cacheKey, data);
  
  return data;
}

// Função para buscar um post específico pelo slug
export async function fetchPostBySlug(slug) {
  const cacheKey = `post-${slug}`;
  
  // Tenta buscar do cache primeiro
  const cachedPost = getCache(cacheKey);
  if (cachedPost) {
    console.log(`Retornando post ${slug} do cache`);
    return cachedPost;
  }
  
  // Verifica se é um slug textual nos nossos posts fictícios
  const mockPost = mockPosts.find(post => post.slug === slug);
  if (mockPost) {
    // Salva no cache (por 5 minutos)
    setCache(cacheKey, mockPost);
    return mockPost;
  }
  
  // Se não é um slug textual, tenta buscar da API por ID (caso seja um número)
  console.log(`Buscando post ${slug} da API`);
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
    
    if (!res.ok) {
      return null;
    }
    
    const post = await res.json();
    
    // Adiciona um campo content para demonstrar o HTML
    post.content = `<p>${post.body}</p><p>Este conteúdo é gerado dinamicamente para o post com ID ${post.id}.</p>`;
    
    // Salva no cache (por 5 minutos)
    setCache(cacheKey, post);
    
    return post;
  } catch (error) {
    console.error('Erro ao buscar post:', error);
    return null;
  }
}

// Função para buscar dados da Wikipedia (exemplo de outra API externa)
export async function fetchWikiData(search = 'Next.js') {
  const cacheKey = `wiki-${search}`;
  
  // Tenta buscar do cache primeiro
  const cachedData = getCache(cacheKey);
  if (cachedData) {
    console.log('Retornando dados da Wikipedia do cache');
    return cachedData;
  }
  
  // Se não está no cache, busca da API
  console.log('Buscando dados da Wikipedia');
  
  // URL codificada para a API da Wikipedia
  const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(search)}&format=json&origin=*`;
  
  const res = await fetch(url);
  
  if (!res.ok) {
    throw new Error('Falha ao buscar dados da Wikipedia');
  }
  
  const data = await res.json();
  const results = data.query.search;
  
  // Salva no cache (por 1 hora)
  setCache(cacheKey, results);
  
  return results;
}