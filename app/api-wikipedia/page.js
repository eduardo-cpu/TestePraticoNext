'use client';

import React, { useState } from 'react';
import { fetchWikiData } from '../../lib/api';

export default function WikipediaPage() {
  const [search, setSearch] = useState('Next.js');
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const data = await fetchWikiData(search);
      setResults(data);
    } catch (err) {
      setError('Falha ao buscar dados da Wikipedia. Tente novamente.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">API Wikipedia</h1>
      <p className="mb-6">Esta página consome a API da Wikipedia para buscar artigos.</p>

      <form onSubmit={handleSearch} className="mb-8">
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Digite um termo para buscar"
            className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button 
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors"
            disabled={loading}
          >
            {loading ? 'Buscando...' : 'Buscar'}
          </button>
        </div>
      </form>

      {error && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6" role="alert">
          <p>{error}</p>
        </div>
      )}

      {results && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Resultados da busca</h2>
          {results.length === 0 ? (
            <p>Nenhum resultado encontrado para "{search}".</p>
          ) : (
            <div className="space-y-6">
              {results.map((item) => (
                <div key={item.pageid} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <div dangerouslySetInnerHTML={{ __html: item.snippet + '...' }} />
                  <div className="mt-4">
                    <a 
                      href={`https://en.wikipedia.org/?curid=${item.pageid}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Ler artigo completo
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}