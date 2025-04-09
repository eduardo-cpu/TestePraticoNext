import React, { useEffect, useState } from 'react';
import { fetchApiData } from '../lib/api';

const ApiDataDisplay = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await fetchApiData();
                setData(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getData();
    }, []);

    if (loading) return (
        <div className="flex justify-center items-center p-10">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>
    );
    
    if (error) return (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4" role="alert">
            <p className="font-bold">Erro</p>
            <p>{error}</p>
        </div>
    );

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Posts da API</h2>
            {data && data.length > 0 ? (
                <div className="grid gap-4 md:grid-cols-2">
                    {data.map((item) => (
                        <div key={item.id} className="border border-gray-200 rounded-md p-4 hover:shadow-md transition-shadow">
                            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                            <p className="text-gray-600">{item.body.substring(0, 100)}...</p>
                            <a 
                                href={`/posts/${item.id}`}
                                className="inline-block mt-3 text-blue-600 hover:underline"
                            >
                                Ler mais
                            </a>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Nenhum dado disponível.</p>
            )}
        </div>
    );
};

export default ApiDataDisplay;