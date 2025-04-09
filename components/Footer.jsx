import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-6 mt-auto">
            <div className="container mx-auto text-center">
                <p className="mb-2">&copy; {new Date().getFullYear()} Meu Projeto Next.Js. Eduardo Santos de Paula Todos os direitos reservados.</p>
                <p>
                    <a href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200 mx-2">Política de Privacidade</a> | 
                    <a href="/terms" className="text-gray-400 hover:text-white transition-colors duration-200 mx-2">Termos de Serviço</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;