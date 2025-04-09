import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Next.js App Demo | Teste Prático',
  description: 'Demonstração de funcionalidades Next.js implementadas para o teste prático',
};

const FeatureCard = ({ title, description, link, linkText, icon }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105 border-l-4 border-blue-500">
    <div className="flex items-start mb-4">
      <div className="text-blue-500 mr-4 text-2xl">{icon}</div>
      <h3 className="text-xl font-bold">{title}</h3>
    </div>
    <p className="text-gray-600 mb-4">{description}</p>
    <Link href={link} className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors duration-300">
      {linkText}
    </Link>
  </div>
);

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Teste Prático Next.js</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Demonstração de recursos e funcionalidades implementadas no Next.js, incluindo rotas dinâmicas, 
            consumo de APIs externas, autenticação e middleware.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <FeatureCard
            title="Consumo de API Externa"
            description="Página que consome a API da Wikipedia e exibe resultados de pesquisa em tempo real."
            link="/api-wikipedia"
            linkText="Ver Demo API"
            icon="🔍"
          />
          
          <FeatureCard
            title="Página Estática"
            description="Exemplo de página estática com conteúdo pré-renderizado para melhor performance."
            link="/estatico"
            linkText="Ver Página Estática"
            icon="📄"
          />
          
          <FeatureCard
            title="Rotas Dinâmicas"
            description="Demonstração de rotas dinâmicas com parâmetros na URL (slug, ID) para exibir conteúdos específicos."
            link="/posts"
            linkText="Explorar Posts"
            icon="🔗"
          />
          
          <FeatureCard
            title="Sistema de Autenticação"
            description="Implementação de um sistema de login simples com Next-Auth, proteção de rotas e estado de sessão."
            link="/login"
            linkText="Login"
            icon="🔐"
          />
          
          <FeatureCard
            title="Dashboard Protegido"
            description="Página protegida por autenticação e middleware, acessível apenas para usuários logados."
            link="/dashboard"
            linkText="Acessar Dashboard"
            icon="📊"
          />
          
          <FeatureCard
            title="Cache e Otimização"
            description="Implementação de sistema de cache para otimizar requisições às APIs e melhorar o desempenho."
            link="/posts"
            linkText="Ver Posts (Cacheados)"
            icon="⚡"
          />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Recursos Implementados</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Requisitos Obrigatórios</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Três páginas no roteamento (API, estática, rota dinâmica)</li>
                <li>Consumo de API externa (Wikipedia)</li>
                <li>Projeto publicado no GitHub</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Requisitos Extras</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Integração com Tailwind CSS</li>
                <li>README explicando como executar o projeto</li>
                <li>Middleware para proteção de rotas</li>
                <li>Otimização de performance (cache)</li>
                <li>Sistema de autenticação</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-gray-600 text-sm">
              Desenvolvido para o teste prático Next.js | Abril 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}