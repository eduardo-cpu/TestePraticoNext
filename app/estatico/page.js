import React from 'react';

export const metadata = {
  title: 'Conteúdo Estático | Next.js Example',
  description: 'Página com conteúdo estático sobre Next.js e desenvolvimento web moderno',
};

const EstaticPage = () => {
    return (
        <div className="container mx-auto px-4 py-10">
            <header className="mb-12 text-center">
                <h1 className="text-4xl font-bold mb-4">Next.js - O Futuro do Desenvolvimento Web</h1>
                <p className="text-xl text-gray-600">Uma página estática com informações sobre o framework React mais popular</p>
            </header>

            {/* Seção Principal com Cards */}
            <section className="mb-16">
                <h2 className="text-2xl font-bold mb-6 text-center">Principais Recursos</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-3">Renderização Híbrida</h3>
                            <p className="text-gray-700">
                                Next.js oferece múltiplas formas de renderização: estática, 
                                server-side, client-side e incremental, permitindo escolher a 
                                melhor abordagem para cada página.
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-3">Roteamento Avançado</h3>
                            <p className="text-gray-700">
                                Sistema de roteamento baseado em arquivos com suporte para rotas 
                                dinâmicas, layouts aninhados e middleware para controle granular.
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-3">Otimização Automática</h3>
                            <p className="text-gray-700">
                                Imagens e fontes otimizadas, divisão de código automática e 
                                prefetching inteligente para uma experiência ultra-rápida.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Seção de Estatísticas */}
            <section className="mb-16 bg-gray-100 py-12 px-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-8 text-center">Next.js em Números</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    <div>
                        <p className="text-4xl font-bold text-blue-600">160k+</p>
                        <p className="text-gray-600">Estrelas no GitHub</p>
                    </div>
                    <div>
                        <p className="text-4xl font-bold text-blue-600">9M+</p>
                        <p className="text-gray-600">Downloads Semanais</p>
                    </div>
                    <div>
                        <p className="text-4xl font-bold text-blue-600">1000+</p>
                        <p className="text-gray-600">Contribuidores</p>
                    </div>
                    <div>
                        <p className="text-4xl font-bold text-blue-600">13.4+</p>
                        <p className="text-gray-600">Versão Atual</p>
                    </div>
                </div>
            </section>

            {/* Seção de FAQ */}
            <section className="mb-16">
                <h2 className="text-2xl font-bold mb-6 text-center">Perguntas Frequentes</h2>
                
                <div className="space-y-4">
                    <details className="bg-white p-6 rounded-lg shadow-sm">
                        <summary className="font-semibold cursor-pointer">O que é o Next.js?</summary>
                        <p className="mt-3 text-gray-700">
                            Next.js é um framework React para construção de aplicações web full-stack que oferece
                            renderização híbrida, roteamento, otimização automática e uma excelente experiência de desenvolvimento.
                        </p>
                    </details>

                    <details className="bg-white p-6 rounded-lg shadow-sm">
                        <summary className="font-semibold cursor-pointer">Quais são as vantagens de usar Next.js?</summary>
                        <p className="mt-3 text-gray-700">
                            O Next.js oferece renderização do lado do servidor (SSR), geração estática (SSG), 
                            otimização de imagens, roteamento baseado em sistema de arquivos, API routes, e 
                            uma experiência de desenvolvimento rápida com hot-reloading.
                        </p>
                    </details>

                    <details className="bg-white p-6 rounded-lg shadow-sm">
                        <summary className="font-semibold cursor-pointer">Qual a diferença entre Next.js e React puro?</summary>
                        <p className="mt-3 text-gray-700">
                            Enquanto o React é uma biblioteca para construir interfaces de usuário, o Next.js é 
                            um framework completo construído sobre o React, adicionando ferramentas para roteamento,
                            renderização do lado do servidor, geração de conteúdo estático e integrações com back-end.
                        </p>
                    </details>

                    <details className="bg-white p-6 rounded-lg shadow-sm">
                        <summary className="font-semibold cursor-pointer">O Next.js é bom para SEO?</summary>
                        <p className="mt-3 text-gray-700">
                            Sim! O Next.js é excelente para SEO porque permite renderização do lado do servidor e 
                            geração estática, o que significa que os motores de busca podem indexar facilmente o 
                            conteúdo da sua aplicação, diferente de aplicações React tradicionais.
                        </p>
                    </details>
                </div>
            </section>

            {/* CTA */}
            <section className="text-center bg-blue-600 text-white p-10 rounded-lg">
                <h2 className="text-3xl font-bold mb-4">Comece a usar Next.js hoje</h2>
                <p className="text-xl mb-6">
                    Junte-se a milhares de desenvolvedores e empresas que estão construindo o futuro da web
                </p>
                <div className="flex justify-center space-x-4">
                    <a href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer" 
                       className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors">
                        Documentação
                    </a>
                    <a href="https://nextjs.org/learn" target="_blank" rel="noopener noreferrer" 
                       className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-md font-medium transition-colors">
                        Tutorial
                    </a>
                </div>
            </section>

            <footer className="mt-12 text-center text-gray-500 text-sm">
                <p>Página estática criada como exemplo para o teste prático Next.js</p>
            </footer>
        </div>
    );
};

export default EstaticPage;