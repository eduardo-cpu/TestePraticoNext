import React from 'react';
import Link from 'next/link';
import { mockPosts } from '../../lib/api';

export const metadata = {
  title: 'Blog Posts | Next.js Example',
  description: 'Lista de posts do blog com rotas dinâmicas',
};

// Função para exportar os posts fictícios
export function getMockPosts() {
  return mockPosts;
}

export default function PostsListPage() {
  const posts = getMockPosts();
  
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Posts do Blog</h1>
      
      <p className="text-gray-600 mb-8">
        Clique em qualquer post abaixo para ver seu conteúdo completo através de uma rota dinâmica.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <Link 
            href={`/posts/${post.slug}`} 
            key={post.id}
            className="block bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-xl font-bold mb-2">{post.title}</h2>
            <p className="text-gray-700 mb-4">{post.body}</p>
            <div className="text-blue-600 hover:underline">Ler mais &rarr;</div>
          </Link>
        ))}
      </div>
      
      <div className="mt-10 p-6 bg-gray-100 rounded-lg">
        <h2 className="text-xl font-bold mb-3">Sobre rotas dinâmicas no Next.js</h2>
        <p>
          Esta página demonstra como criar rotas dinâmicas no Next.js usando o sistema de arquivos.
          A pasta <code className="bg-gray-200 px-1 py-0.5 rounded">[slug]</code> permite capturar parâmetros 
          dinâmicos da URL e usá-los para buscar conteúdo específico.
        </p>
      </div>
    </div>
  );
}